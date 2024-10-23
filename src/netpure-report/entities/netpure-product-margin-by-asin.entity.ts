// src/netpure-report/entities/netpure-product-margin-by-asin.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NetPureReport } from './netpure-report.entity';

@Entity()
export class NetPureProductMarginByAsin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', nullable: true })
    startDate: Date;

    @Column({ type: 'date', nullable: true })
    endDate: Date;

    @Column({ nullable: true })
    asin: string;

    @Column({ type: 'float', nullable: true })
    netPureProductMargin: number;

    @ManyToOne(() => NetPureReport, (netPureReport) => netPureReport.netPureProductMarginByAsins)
    netPureReport: NetPureReport;
}
