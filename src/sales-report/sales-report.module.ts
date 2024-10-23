import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesByAsin } from './entities/sales-by-asin.entity';
import { SalesAggregate } from './entities/sales-aggregate.entity';
import { SalesReportService } from './sales-report.service';
import { SalesReportController } from './sales-report.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SalesByAsin, SalesAggregate]), // Register entities here
  ],
  providers: [SalesReportService],
  controllers: [SalesReportController],
})
export class SalesReportModule {}
