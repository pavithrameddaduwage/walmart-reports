// src/netpure-report/netpure-report.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { NetPureReportService } from './netpure-report.service';
import { NetPureReport } from './entities/netpure-report.entity';

@Controller('netpure-report')
export class NetPureReportController {
    constructor(private readonly netPureReportService: NetPureReportService) {}

    @Post()
    async create(@Body() data: any): Promise<NetPureReport> {
        return this.netPureReportService.createNetPureReport(data);
    }
}
