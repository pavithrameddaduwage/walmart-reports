import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ForecastByAsin } from './forecast-by-asin.entity';

@Entity("amazon_forecast_report_entity")
export class ForecastReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, name: 'report_type' }) 
    reportType: string;

    @Column({ type: 'jsonb', nullable: true, name: 'report_options' }) 
    reportOptions: {
        sellingProgram: string;
    };

    @Column({ type: 'date', nullable: true, name: 'last_updated_date' }) 
    lastUpdatedDate: Date;

    @Column({ type: 'date', nullable: true, name: 'data_start_time' }) 
    dataStartTime: Date;

    @Column({ type: 'date', nullable: true, name: 'data_end_time' }) 
    dataEndTime: Date;

    @Column('jsonb', { nullable: true, name: 'marketplace_ids' }) 
    marketplaceIds: string[];

    @OneToMany(() => ForecastByAsin, (forecastByAsin) => forecastByAsin.forecastReport, {
        cascade: true,
    })
    forecastByAsins: ForecastByAsin[];
}
