import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SalesAggregate } from './sales-aggregate.entity';

@Entity()
export class SalesByAsin {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SalesAggregate, (aggregate) => aggregate.salesByAsin)
  salesAggregate: SalesAggregate;

  @Column({ nullable: true })
  startDate: string;

  @Column({ nullable: true })
  endDate: string;

  @Column({ nullable: true })
  asin: string;

  @Column({ nullable: true, type: 'int' })
  customerReturns: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  orderedRevenueAmount: number;

  @Column({ nullable: true })
  orderedRevenueCurrency: string;

  @Column({ nullable: true, type: 'int' })
  orderedUnits: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  shippedCogsAmount: number;

  @Column({ nullable: true })
  shippedCogsCurrency: string;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  shippedRevenueAmount: number;

  @Column({ nullable: true })
  shippedRevenueCurrency: string;

  @Column({ nullable: true, type: 'int' })
  shippedUnits: number;
}
