// src/forcast-report/entities/forecast-report.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ForecastByAsin } from './forecast-by-asin.entity';

@Entity()
export class ForecastReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    reportType: string;

    @Column({ type: 'jsonb', nullable: true })
    reportOptions: {
        sellingProgram: string;
    };

    @Column({ type: 'date', nullable: true })
    lastUpdatedDate: Date;

    @Column({ type: 'date', nullable: true })
    dataStartTime: Date;

    @Column({ type: 'date', nullable: true })
    dataEndTime: Date;

    @Column('jsonb', { nullable: true })
    marketplaceIds: string[];

    @OneToMany(() => ForecastByAsin, (forecastByAsin) => forecastByAsin.forecastReport, {
        cascade: true,
    })
    forecastByAsins: ForecastByAsin[];
}
