import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReportSpecification } from './report-specification.entity';

@Entity()
export class InventoryByAsin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: true })  
  startDate: Date;

  @Column({ type: 'date', nullable: true })  
  endDate: Date;

  @Column({ nullable: true })
  asin: string;

  @Column({ type: 'float', nullable: true }) // Change to float to accept decimal values
  sourceableProductOutOfStockRate: number;

  @Column({ type: 'float', nullable: true }) // Change to float
  procurableProductOutOfStockRate: number;

  @Column({ nullable: true })
  openPurchaseOrderUnits: number;

  @Column({ type: 'float', nullable: true }) // Change to float
  receiveFillRate: number;

  @Column({ type: 'float', nullable: true }) // Change to float
  averageVendorLeadTimeDays: number;

  @Column({ type: 'float', nullable: true }) // Change to float
  sellThroughRate: number;

  @Column({ nullable: true })
  unfilledCustomerOrderedUnits: number;

  @Column({ type: 'float', nullable: true }) // Change to float
  vendorConfirmationRate: number;

  // Separate columns for netReceivedInventoryCost
  @Column({ type: 'float', nullable: true })
  netReceivedInventoryCostAmount: number;

  @Column({ nullable: true })
  netReceivedInventoryCostCurrencyCode: string;

  @Column({ nullable: true })
  netReceivedInventoryUnits: number;

  // Separate columns for sellableOnHandInventoryCost
  @Column({ type: 'float', nullable: true })
  sellableOnHandInventoryCostAmount: number;

  @Column({ nullable: true })
  sellableOnHandInventoryCostCurrencyCode: string;

  @Column({ nullable: true })
  sellableOnHandInventoryUnits: number;

  // Separate columns for unsellableOnHandInventoryCost
  @Column({ type: 'float', nullable: true })
  unsellableOnHandInventoryCostAmount: number;

  @Column({ nullable: true })
  unsellableOnHandInventoryCostCurrencyCode: string;

  @Column({ nullable: true })
  unsellableOnHandInventoryUnits: number;

  // Separate columns for aged90PlusDaysSellableInventoryCost
  @Column({ type: 'float', nullable: true })
  aged90PlusDaysSellableInventoryCostAmount: number;

  @Column({ nullable: true })
  aged90PlusDaysSellableInventoryCostCurrencyCode: string;

  @Column({ nullable: true })
  aged90PlusDaysSellableInventoryUnits: number;

  @ManyToOne(() => ReportSpecification, (report) => report.inventoryByAsins)
  report: ReportSpecification;
}
