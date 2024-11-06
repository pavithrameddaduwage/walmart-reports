 import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ForecastReport } from './forcast-report.entity';

@Entity("amazon_forecast_by_asin")  
export class ForecastByAsin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', name: 'forecast_generation_date' })  
    forecastGenerationDate: Date;

    @Column({ name: 'asin' })
    asin: string;

    @Column({ type: 'date', name: 'start_date' })  
    startDate: Date;

    @Column({ type: 'date', name: 'end_date' })  
    endDate: Date;

    @Column({ name: 'mean_forecast_units' })  
    meanForecastUnits: number;

    @Column({ name: 'p70_forecast_units' })  
    p70ForecastUnits: number;

    @Column({ name: 'p80_forecast_units' })  
    p80ForecastUnits: number;

    @Column({ name: 'p90_forecast_units' })  
    p90ForecastUnits: number;

    @ManyToOne(() => ForecastReport, (forecastReport) => forecastReport.forecastByAsins)
    forecastReport: ForecastReport;
}