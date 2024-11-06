import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForecastReport } from './entities/forcast-report.entity';
import { ForecastByAsin } from './entities/forecast-by-asin.entity';
import { CreateForcastReportDto, ForecastReportResponseDto } from './dto/create-forcast-report.dto';

@Injectable()
export class ForcastReportService {
    constructor(
        @InjectRepository(ForecastReport)
        private readonly forecastReportRepository: Repository<ForecastReport>,
        @InjectRepository(ForecastByAsin)
        private readonly forecastByAsinRepository: Repository<ForecastByAsin>,
    ) {}

    async createForecastReport(data: CreateForcastReportDto): Promise<ForecastReportResponseDto> {
        const report = this.forecastReportRepository.create({
            reportType: data.reportSpecification.reportType,
            reportOptions: data.reportSpecification.reportOptions,
            lastUpdatedDate: new Date(data.reportSpecification.lastUpdatedDate),
            dataStartTime: data.reportSpecification.dataStartTime ? new Date(data.reportSpecification.dataStartTime) : null,
            dataEndTime: data.reportSpecification.dataEndTime ? new Date(data.reportSpecification.dataEndTime) : null,
            marketplaceIds: data.reportSpecification.marketplaceIds,
            forecastByAsins: [],  
        });

        const forecasts = data.forecastByAsin.map(forecast => {
            const forecastByAsin = this.forecastByAsinRepository.create({
                forecastGenerationDate: new Date(forecast.forecastGenerationDate),
                asin: forecast.asin,
                startDate: new Date(forecast.startDate),
                endDate: new Date(forecast.endDate),
                meanForecastUnits: forecast.meanForecastUnits,
                p70ForecastUnits: forecast.p70ForecastUnits,
                p80ForecastUnits: forecast.p80ForecastUnits,
                p90ForecastUnits: forecast.p90ForecastUnits,
            });
            forecastByAsin.forecastReport = report;  
            return forecastByAsin;
        });

        const BATCH_SIZE = 10;  

        try {
            await this.forecastReportRepository.manager.transaction(async transactionalEntityManager => {
                 
                const savedReport = await transactionalEntityManager.save(report);

               
                for (let i = 0; i < forecasts.length; i += BATCH_SIZE) {
                    const chunk = forecasts.slice(i, i + BATCH_SIZE);
                    const savedChunk = await transactionalEntityManager.save(chunk);
                    savedReport.forecastByAsins.push(...savedChunk);
                    console.log(`Inserted batch ${Math.ceil(i / BATCH_SIZE) + 1} of ${Math.ceil(forecasts.length / BATCH_SIZE)}`);
                }
            });
        } catch (error) {
            console.error('Error during insertion:', error);
            throw new InternalServerErrorException('Error saving forecast data.');
        }

         
        return {
            id: report.id,
            reportType: report.reportType,
            lastUpdatedDate: report.lastUpdatedDate,
            dataStartTime: report.dataStartTime,
            dataEndTime: report.dataEndTime,
            marketplaceIds: report.marketplaceIds,
            forecastByAsins: report.forecastByAsins.map(forecastByAsin => ({
                forecastGenerationDate: forecastByAsin.forecastGenerationDate,
                asin: forecastByAsin.asin,
                startDate: forecastByAsin.startDate,
                endDate: forecastByAsin.endDate,
                meanForecastUnits: forecastByAsin.meanForecastUnits,
                p70ForecastUnits: forecastByAsin.p70ForecastUnits,
                p80ForecastUnits: forecastByAsin.p80ForecastUnits,
                p90ForecastUnits: forecastByAsin.p90ForecastUnits,
            })),
        };
    }
}
