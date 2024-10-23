import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TrafficReport } from './traffic-report.entity';

@Entity()
export class TrafficByAsin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  asin: string;

  @Column()
  glanceViews: number;

  @ManyToOne(() => TrafficReport, (trafficReport) => trafficReport.trafficByAsins)
  trafficReport: TrafficReport;
}
