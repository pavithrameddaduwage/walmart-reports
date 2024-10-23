import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrafficReport } from './entities/traffic-report.entity';
import { TrafficByAsin } from './entities/traffic-by-asin.entity';
import { TrafficAggregate } from './entities/traffic-aggregate.entity';

@Injectable()
export class TrafficReportService {
  constructor(
    @InjectRepository(TrafficReport)
    private readonly trafficReportRepository: Repository<TrafficReport>,
    @InjectRepository(TrafficByAsin)
    private readonly trafficByAsinRepository: Repository<TrafficByAsin>,
    @InjectRepository(TrafficAggregate)
    private readonly trafficAggregateRepository: Repository<TrafficAggregate>,
  ) {}

  async createTrafficReport(data: any): Promise<TrafficReport> {
    const report = this.trafficReportRepository.create({
      reportType: data.reportSpecification.reportType,
      reportOptions: data.reportSpecification.reportOptions,
      lastUpdatedDate: new Date(data.reportSpecification.lastUpdatedDate),
      dataStartTime: new Date(data.reportSpecification.dataStartTime),
      dataEndTime: new Date(data.reportSpecification.dataEndTime),
      marketplaceIds: data.reportSpecification.marketplaceIds,
      trafficAggregates: data.trafficAggregate.map(item => {
        return this.trafficAggregateRepository.create({
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
          glanceViews: item.glanceViews,
        });
      }),
      trafficByAsins: data.trafficByAsin.map(item => {
        return this.trafficByAsinRepository.create({
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
          asin: item.asin,
          glanceViews: item.glanceViews,
        });
      }),
    });

    return await this.trafficReportRepository.save(report);
  }
}
