import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TrafficReport } from './traffic-report.entity';

@Entity()
export class TrafficAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  glanceViews: number;

  @ManyToOne(() => TrafficReport, (trafficReport) => trafficReport.trafficAggregates)
  trafficReport: TrafficReport;
}
