// src/forcast-report/forcast-report.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ForcastReportService } from './forcast-report.service';
import { ForecastReport } from './entities/forcast-report.entity';

@Controller('forcast-report')
export class ForcastReportController {
    constructor(private readonly forcastReportService: ForcastReportService) {}

    @Post()
    async create(@Body() data: any): Promise<ForecastReport> {
        return this.forcastReportService.createForecastReport(data);
    }
}
