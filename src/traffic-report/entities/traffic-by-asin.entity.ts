import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TrafficReport } from './traffic-report.entity';

@Entity("amazon_traffic_by_asin")
export class TrafficByAsin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'date', name: 'end_date' })
  endDate: Date;

  @Column({ name: 'asin' })
  asin: string;

  @Column({ name: 'glance_views' })
  glanceViews: number;

  @ManyToOne(() => TrafficReport, (trafficReport) => trafficReport.trafficByAsins)
  trafficReport: TrafficReport;
}
