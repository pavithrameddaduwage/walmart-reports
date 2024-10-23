import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('real_time_traffic_report')
export class RealTimeTrafficReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column()
    asin: string;

    @Column({ type: 'int' })
    glanceViews: number;
}
