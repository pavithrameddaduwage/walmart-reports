import { Controller, Post, Body } from '@nestjs/common';
import { TrafficReportService } from './traffic-report.service';
import { CreateTrafficReportDto } from './dto/create-traffic-report.dto';

@Controller('traffic-report')
export class TrafficReportController {
  constructor(private readonly trafficReportService: TrafficReportService) {}

  @Post()
  async create(@Body() data: CreateTrafficReportDto): Promise<any> {
    return this.trafficReportService.createTrafficReport(data);
  }
}
