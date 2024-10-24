import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SalesAggregate } from './sales-aggregate.entity';

@Entity()
export class SalesByAsin {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SalesAggregate, (aggregate) => aggregate.salesByAsin)
  salesAggregate: SalesAggregate;

  @Column({ nullable: true, default: null })
  startDate: string | null;

  @Column({ nullable: true, default: null })
  endDate: string | null;

  @Column({ nullable: true, default: null })
  asin: string | null;

  @Column({ nullable: true, type: 'int', default: 0 })
  customerReturns: number | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  orderedRevenueAmount: number | null;

  @Column({ nullable: true, default: null })
  orderedRevenueCurrency: string | null;

  @Column({ nullable: true, type: 'int', default: 0 })
  orderedUnits: number | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  shippedCogsAmount: number | null;

  @Column({ nullable: true, default: null })
  shippedCogsCurrency: string | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  shippedRevenueAmount: number | null;

  @Column({ nullable: true, default: null })
  shippedRevenueCurrency: string | null;

  @Column({ nullable: true, type: 'int', default: 0 })
  shippedUnits: number | null;
}
