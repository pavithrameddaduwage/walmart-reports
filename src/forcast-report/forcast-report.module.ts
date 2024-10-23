// src/forcast-report/forcast-report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForcastReportService } from './forcast-report.service';
import { ForcastReportController } from './forcast-report.controller';
import { ForecastReport } from './entities/forcast-report.entity';
import { ForecastByAsin } from './entities/forecast-by-asin.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ForecastReport, ForecastByAsin]),
    ],
    controllers: [ForcastReportController],
    providers: [ForcastReportService],
})
export class ForcastReportModule {}
