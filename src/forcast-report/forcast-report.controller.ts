import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ForcastReportService } from './forcast-report.service';
import { CreateForcastReportDto } from './dto/create-forcast-report.dto';

@Controller('forecast-report')
export class ForcastReportController {
    constructor(private readonly forcastReportService: ForcastReportService) {}

    @Post()
    async create(@Body() createForcastReportDto: CreateForcastReportDto) {
         
        return await this.forcastReportService.createForecastReport(createForcastReportDto);
    }
}