import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesByAsin } from './sales-by-asin.entity';

@Entity()
export class SalesAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: null })
  startDate: string | null;

  @Column({ nullable: true, default: null })
  endDate: string | null;

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

  @OneToMany(() => SalesByAsin, (salesByAsin) => salesByAsin.salesAggregate)
  salesByAsin: SalesByAsin[];
}
