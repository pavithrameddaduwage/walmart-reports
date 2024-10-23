 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NetPureProductMarginByAsin } from './netpure-product-margin-by-asin.entity';

@Entity()
export class NetPureReport {
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

    @OneToMany(() => NetPureProductMarginByAsin, (netPureProductMarginByAsin) => netPureProductMarginByAsin.netPureReport, {
        cascade: true,
    })
    netPureProductMarginByAsins: NetPureProductMarginByAsin[];

    @Column('jsonb', { nullable: true })
    netPureProductMarginAggregate: {
        startDate: Date;
        endDate: Date;
        netPureProductMargin: number;
    }[];
}
