import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from './entities/report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) {}

  async saveReport(reportType: string, data: any): Promise<ReportEntity> {
    const report = this.reportRepository.create({ reportType, data });
    await this.reportRepository.save(report);
    return report;
  }
}
