import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TrafficByAsin } from './traffic-by-asin.entity';
import { TrafficAggregate } from './traffic-aggregate.entity';

@Entity()
export class TrafficReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  reportType: string;

  @Column({ type: 'jsonb', nullable: true })
  reportOptions: {
    reportPeriod: string;
  };

  @Column({ type: 'date', nullable: true })
  lastUpdatedDate: Date;

  @Column({ type: 'date', nullable: true })
  dataStartTime: Date;

  @Column({ type: 'date', nullable: true })
  dataEndTime: Date;

  @Column('jsonb', { nullable: true })
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
