import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ReportSpecification } from './report-specification.entity';

@Entity()
export class InventoryAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column('float', { nullable: true })
  sourceableProductOutOfStockRate: number;

  @Column('float', { nullable: true })
  procurableProductOutOfStockRate: number;

  @Column()
  openPurchaseOrderUnits: number;

  @Column('float')
  receiveFillRate: number;

  @Column('float')
  averageVendorLeadTimeDays: number;

  // Separate fields for netReceivedInventoryCost
  @Column({ type: 'float', nullable: true })
  netReceivedInventoryCostAmount: number;

  @Column({ nullable: true })
  netReceivedInventoryCostCurrencyCode: string;

  // Separate fields for sellableOnHandInventoryCost
  @Column({ type: 'float', nullable: true })
  sellableOnHandInventoryCostAmount: number;

  @Column({ nullable: true })
  sellableOnHandInventoryCostCurrencyCode: string;

  // Separate fields for unsellableOnHandInventoryCost
  @Column({ type: 'float', nullable: true })
  unsellableOnHandInventoryCostAmount: number;

  @Column({ nullable: true })
  unsellableOnHandInventoryCostCurrencyCode: string;

  // Separate fields for aged90PlusDaysSellableInventoryCost
  @Column({ type: 'float', nullable: true })
  aged90PlusDaysSellableInventoryCostAmount: number;

  @Column({ nullable: true })
  aged90PlusDaysSellableInventoryCostCurrencyCode: string;

  @ManyToOne(() => ReportSpecification, (report) => report.inventoryAggregates)
  report: ReportSpecification;
}
