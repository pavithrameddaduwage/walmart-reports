// src/forcast-report/entities/forecast-by-asin.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ForecastReport } from './forcast-report.entity';

@Entity()
export class ForecastByAsin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    forecastGenerationDate: Date;

    @Column()
    asin: string;

    @Column({ type: 'date' })
    startDate: Date;

    @Column({ type: 'date' })
    endDate: Date;

    @Column()
    meanForecastUnits: number;

    @Column()
    p70ForecastUnits: number;

    @Column()
    p80ForecastUnits: number;

    @Column()
    p90ForecastUnits: number;

    @ManyToOne(() => ForecastReport, (forecastReport) => forecastReport.forecastByAsins)
    forecastReport: ForecastReport; // This establishes the relation back to the ForecastReport entity
}
