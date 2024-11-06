import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesByAsin } from './sales-by-asin.entity';

@Entity("amazon_sales_aggregate")
export class SalesAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: null, name: 'start_date' })
  startDate: string | null;

  @Column({ nullable: true, default: null, name: 'end_date' })
  endDate: string | null;

  @Column({ nullable: true, type: 'int', default: 0, name: 'customer_returns' })
  customerReturns: number | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0, name: 'ordered_revenue_amount' })
  orderedRevenueAmount: number | null;

  @Column({ nullable: true, default: null, name: 'ordered_revenue_currency' })
  orderedRevenueCurrency: string | null;

  @Column({ nullable: true, type: 'int', default: 0, name: 'ordered_units' })
  orderedUnits: number | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0, name: 'shipped_cogs_amount' })
  shippedCogsAmount: number | null;

  @Column({ nullable: true, default: null, name: 'shipped_cogs_currency' })
  shippedCogsCurrency: string | null;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2, default: 0.0, name: 'shipped_revenue_amount' })
  shippedRevenueAmount: number | null;

  @Column({ nullable: true, default: null, name: 'shipped_revenue_currency' })
  shippedRevenueCurrency: string | null;

  @Column({ nullable: true, type: 'int', default: 0, name: 'shipped_units' })
  shippedUnits: number | null;

  @OneToMany(() => SalesByAsin, (salesByAsin) => salesByAsin.salesAggregate)
  salesByAsin: SalesByAsin[];
}
