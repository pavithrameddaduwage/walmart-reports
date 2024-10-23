import { Controller, Post, Body } from '@nestjs/common';
import { SalesReportService } from './sales-report.service';

@Controller('sales-report')
export class SalesReportController {
  constructor(private readonly salesReportService: SalesReportService) {}

  @Post()
  async createReport(@Body() data: any): Promise<string> {
    await this.salesReportService.createSalesReport(data);
    return 'Sales report has been stored successfully!';
  }
}