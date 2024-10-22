import { Controller, Post, Body } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('vendor-sales')
  async saveVendorSalesReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_SALES_REPORT', body);
  }

  @Post('vendor-net-pure-product-margin')
  async saveVendorNetPureProductMargin(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT', body);
  }

  @Post('vendor-traffic')
  async saveVendorTrafficReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_TRAFFIC_REPORT', body);
  }

  @Post('vendor-forecasting')
  async saveVendorForecastingReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_FORECASTING_REPORT', body);
  }

  @Post('vendor-inventory')
  async saveVendorInventoryReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_INVENTORY_REPORT', body);
  }

  @Post('vendor-real-time-sales')
  async saveVendorRealTimeSalesReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_REAL_TIME_SALES_REPORT', body);
  }

  @Post('vendor-real-time-traffic')
  async saveVendorRealTimeTrafficReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_REAL_TIME_TRAFFIC_REPORT', body);
  }

  @Post('vendor-real-time-inventory')
  async saveVendorRealTimeInventoryReport(@Body() body: any) {
    return await this.reportService.saveReport('GET_VENDOR_REAL_TIME_INVENTORY_REPORT', body);
  }
}
