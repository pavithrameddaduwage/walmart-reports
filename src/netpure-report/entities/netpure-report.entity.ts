import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NetPureProductMarginByAsin } from './netpure-product-margin-by-asin.entity';

@Entity("amazon_netpure_report") 
export class NetPureReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'report_type' })
  reportType: string;

  @Column({ nullable: true, name: 'report_period' })
  reportPeriod: string;

  @Column({ type: 'date', nullable: true, name: 'last_updated_date' })
  lastUpdatedDate: Date;

  @Column({ type: 'date', nullable: true, name: 'data_start_time' })
  dataStartTime: Date;

  @Column({ type: 'date', nullable: true, name: 'data_end_time' })
  dataEndTime: Date;

  @Column('jsonb', { nullable: true, name: 'marketplace_ids' })
  marketplaceIds: string[];

  @OneToMany(() => NetPureProductMarginByAsin, (netPureProductMarginByAsin) => netPureProductMarginByAsin.netPureReport, {
    cascade: true,
  })
  netPureProductMarginByAsins: NetPureProductMarginByAsin[];

  @Column({ type: 'date', nullable: true, name: 'net_pure_product_margin_aggregate_start_date' })
  netPureProductMarginAggregateStartDate: Date;

  @Column({ type: 'date', nullable: true, name: 'net_pure_product_margin_aggregate_end_date' })
  netPureProductMarginAggregateEndDate: Date;

  @Column('float', { nullable: true, name: 'net_pure_product_margin' })
  netPureProductMargin: number;
}
