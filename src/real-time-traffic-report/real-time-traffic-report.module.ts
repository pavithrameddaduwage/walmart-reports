import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealTimeTrafficReportController } from './real-time-traffic-report.controller';
import { RealTimeTrafficReportService } from './real-time-traffic-report.service';
import { RealTimeTrafficReport } from './entities/real-time-traffic-report.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RealTimeTrafficReport])],
    controllers: [RealTimeTrafficReportController],
    providers: [RealTimeTrafficReportService],
})
export class RealTimeTrafficReportModule {}
