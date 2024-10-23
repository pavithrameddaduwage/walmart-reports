import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrafficReportController } from './traffic-report.controller';
import { TrafficReportService } from './traffic-report.service';
import { TrafficReport } from './entities/traffic-report.entity';
import { TrafficByAsin } from './entities/traffic-by-asin.entity';
import { TrafficAggregate } from './entities/traffic-aggregate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrafficReport, TrafficByAsin, TrafficAggregate])],
  controllers: [TrafficReportController],
  providers: [TrafficReportService],
})
export class TrafficReportModule {}
