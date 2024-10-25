import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NetPureProductMarginByAsin } from './netpure-product-margin-by-asin.entity';

@Entity()
export class NetPureReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  reportType: string;

  // reportOptions as separate fields
  @Column({ nullable: true })
  reportPeriod: string; // from reportOptions.reportPeriod

  @Column({ type: 'date', nullable: true })
  lastUpdatedDate: Date;

  @Column({ type: 'date', nullable: true })
  dataStartTime: Date;

  @Column({ type: 'date', nullable: true })
  dataEndTime: Date;

  // marketplaceIds stored as JSON but you can treat it as an array of strings
  @Column('jsonb', { nullable: true })
  marketplaceIds: string[];

  // netPureProductMarginByAsins relationship
  @OneToMany(() => NetPureProductMarginByAsin, (netPureProductMarginByAsin) => netPureProductMarginByAsin.netPureReport, {
    cascade: true,
  })
  netPureProductMarginByAsins: NetPureProductMarginByAsin[];

  // netPureProductMarginAggregate as separate fields
  @Column({ type: 'date', nullable: true })
  netPureProductMarginAggregateStartDate: Date;

  @Column({ type: 'date', nullable: true })
  netPureProductMarginAggregateEndDate: Date;

  @Column('float', { nullable: true })
  netPureProductMargin: number;
}
