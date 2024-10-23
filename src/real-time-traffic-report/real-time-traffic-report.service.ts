import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealTimeTrafficReport } from './entities/real-time-traffic-report.entity';

@Injectable()
export class RealTimeTrafficReportService {
    constructor(
        @InjectRepository(RealTimeTrafficReport)
        private readonly realTimeTrafficReportRepository: Repository<RealTimeTrafficReport>,
    ) {}

    async createTrafficReport(data: any): Promise<RealTimeTrafficReport[]> {
        const trafficReports = data.reportData.map(report => {
            return this.realTimeTrafficReportRepository.create({
                startTime: new Date(report.startTime),
                endTime: new Date(report.endTime),
                asin: report.asin,
                glanceViews: report.glanceViews,
            });
        });

        return await this.realTimeTrafficReportRepository.save(trafficReports);
    }
}
