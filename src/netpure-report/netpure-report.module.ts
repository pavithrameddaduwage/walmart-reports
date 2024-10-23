// src/netpure-report/netpure-report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetPureReportController } from './netpure-report.controller';
import { NetPureReportService } from './netpure-report.service';
import { NetPureReport } from './entities/netpure-report.entity';
import { NetPureProductMarginByAsin } from './entities/netpure-product-margin-by-asin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([NetPureReport, NetPureProductMarginByAsin])],
    controllers: [NetPureReportController],
    providers: [NetPureReportService],
})
export class NetPureReportModule {}
