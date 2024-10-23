// src/forcast-report/forcast-report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForecastReport } from './entities/forcast-report.entity';
import { ForecastByAsin } from './entities/forecast-by-asin.entity';

@Injectable()
export class ForcastReportService {
    constructor(
        @InjectRepository(ForecastReport)
        private readonly forecastReportRepository: Repository<ForecastReport>,
        @InjectRepository(ForecastByAsin)
        private readonly forecastByAsinRepository: Repository<ForecastByAsin>,
    ) {}

    async createForecastReport(data: any): Promise<ForecastReport> {
      
        const report = this.forecastReportRepository.create({
            reportType: data.reportSpecification.reportType,
            reportOptions: data.reportSpecification.reportOptions,
            lastUpdatedDate: new Date(data.reportSpecification.lastUpdatedDate),
            dataStartTime: data.reportSpecification.dataStartTime ? new Date(data.reportSpecification.dataStartTime) : null,
            dataEndTime: data.reportSpecification.dataEndTime ? new Date(data.reportSpecification.dataEndTime) : null,
            marketplaceIds: data.reportSpecification.marketplaceIds,
            
            forecastByAsins: [],
        });

 
        const chunkSize = 500;
        const forecasts = data.forecastByAsin.map(forecast => {
            return this.forecastByAsinRepository.create({
                forecastGenerationDate: new Date(forecast.forecastGenerationDate),
                asin: forecast.asin,
                startDate: new Date(forecast.startDate),
                endDate: new Date(forecast.endDate),
                meanForecastUnits: forecast.meanForecastUnits,
                p70ForecastUnits: forecast.p70ForecastUnits,
                p80ForecastUnits: forecast.p80ForecastUnits,
                p90ForecastUnits: forecast.p90ForecastUnits,
            });
        });

 
        for (let i = 0; i < forecasts.length; i += chunkSize) {
            const chunk = forecasts.slice(i, i + chunkSize);
            const savedChunk = await this.forecastByAsinRepository.save(chunk);
            report.forecastByAsins.push(...savedChunk);
        }

      
        return await this.forecastReportRepository.save(report);
    }
}
