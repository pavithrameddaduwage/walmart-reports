import { Body, Controller, Post } from '@nestjs/common';
import { InventoryReportService } from './inventory-report.service';

@Controller('inventory-report')
export class InventoryReportController {
  constructor(private readonly inventoryReportService: InventoryReportService) {}

  @Post()
  async createReport(@Body() reportData: any) {
    await this.inventoryReportService.createReport(reportData);
  }
}
