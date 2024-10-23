import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesByAsin } from './sales-by-asin.entity';

@Entity()
export class SalesAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  startDate: string;

  @Column({ nullable: true })
  endDate: string;

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

  @OneToMany(() => SalesByAsin, (salesByAsin) => salesByAsin.salesAggregate)
  salesByAsin: SalesByAsin[];
}