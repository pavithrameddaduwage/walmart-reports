import { Controller, Post, Body } from '@nestjs/common';
import { RealTimeTrafficReportService } from './real-time-traffic-report.service';
import { RealTimeTrafficReport } from './entities/real-time-traffic-report.entity';

@Controller('real-time-traffic-report')
export class RealTimeTrafficReportController {
    constructor(private readonly realTimeTrafficReportService: RealTimeTrafficReportService) {}

    @Post()
    async create(@Body() data: any): Promise<RealTimeTrafficReport[]> {
        return this.realTimeTrafficReportService.createTrafficReport(data);
    }
}
