import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TrafficByAsin } from './traffic-by-asin.entity';
import { TrafficAggregate } from './traffic-aggregate.entity';

@Entity("amazon_traffic_report")
export class TrafficReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'report_type' })
  reportType: string;

  @Column({ type: 'jsonb', nullable: true, name: 'report_options' })
  reportOptions: {
    reportPeriod: string;
  };

  @Column({ type: 'date', nullable: true, name: 'last_updated_date' })
  lastUpdatedDate: Date;

  @Column({ type: 'date', nullable: true, name: 'data_start_time' })
  dataStartTime: Date;

  @Column({ type: 'date', nullable: true, name: 'data_end_time' })
  dataEndTime: Date;

  @Column('jsonb', { nullable: true, name: 'marketplace_ids' })
  marketplaceIds: string[];

  @OneToMany(() => TrafficByAsin, (trafficByAsin) => trafficByAsin.trafficReport, {
    cascade: true,
  })
  trafficByAsins: TrafficByAsin[];

  @OneToMany(() => TrafficAggregate, (trafficAggregate) => trafficAggregate.trafficReport, {
    cascade: true,
  })
  trafficAggregates: TrafficAggregate[];
}
