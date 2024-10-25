 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NetPureReport } from './entities/netpure-report.entity';
import { NetPureProductMarginByAsin } from './entities/netpure-product-margin-by-asin.entity';

@Injectable()
export class NetPureReportService {
  constructor(
    @InjectRepository(NetPureReport)
    private readonly netPureReportRepository: Repository<NetPureReport>,
    @InjectRepository(NetPureProductMarginByAsin)
    private readonly netPureProductMarginByAsinRepository: Repository<NetPureProductMarginByAsin>,
  ) {}

  async createNetPureReport(data: any): Promise<NetPureReport> {
    const report = this.netPureReportRepository.create({
      // Mapping individual columns for NetPureReport entity
      reportType: data.reportSpecification.reportType,

      // Handling reportOptions as separate fields
      reportPeriod: data.reportSpecification.reportOptions?.reportPeriod,

      lastUpdatedDate: new Date(data.reportSpecification.lastUpdatedDate),
      dataStartTime: new Date(data.reportSpecification.dataStartTime),
      dataEndTime: new Date(data.reportSpecification.dataEndTime),

      marketplaceIds: data.reportSpecification.marketplaceIds,

      // Mapping netPureProductMarginAggregate to separate columns
      netPureProductMarginAggregateStartDate: new Date(data.netPureProductMarginAggregate?.[0]?.startDate),
      netPureProductMarginAggregateEndDate: new Date(data.netPureProductMarginAggregate?.[0]?.endDate),
      netPureProductMargin: data.netPureProductMarginAggregate?.[0]?.netPureProductMargin,

      // Mapping the relationship for NetPureProductMarginByAsins
      netPureProductMarginByAsins: data.netPureProductMarginByAsin.map(forecast => {
        return this.netPureProductMarginByAsinRepository.create({
          startDate: new Date(forecast.startDate),
          endDate: new Date(forecast.endDate),
          asin: forecast.asin,
          netPureProductMargin: forecast.netPureProductMargin,
        });
      }),
    });

    return await this.netPureReportRepository.save(report);
  }
}