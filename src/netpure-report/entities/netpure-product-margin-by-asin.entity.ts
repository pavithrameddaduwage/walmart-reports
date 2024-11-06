 import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NetPureReport } from './netpure-report.entity';

@Entity("amazon_netpure_product_margin_by_asin")  
export class NetPureProductMarginByAsin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', nullable: true, name: 'start_date' })  
    startDate: Date;

    @Column({ type: 'date', nullable: true, name: 'end_date' })  
    endDate: Date;

    @Column({ nullable: true, name: 'asin' })
    asin: string;

    @Column({ type: 'float', nullable: true, name: 'net_pure_product_margin' })  
    netPureProductMargin: number;

    @ManyToOne(() => NetPureReport, (netPureReport) => netPureReport.netPureProductMarginByAsins)
    netPureReport: NetPureReport;
}
