import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TrafficReport } from './traffic-report.entity';

@Entity("amazon_traffic_aggregate")
export class TrafficAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'date', name: 'end_date' })
  endDate: Date;

  @Column({ name: 'glance_views' })
  glanceViews: number;

  @ManyToOne(() => TrafficReport, (trafficReport) => trafficReport.trafficAggregates)
  trafficReport: TrafficReport;
}
