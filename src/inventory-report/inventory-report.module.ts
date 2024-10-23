import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportSpecification } from './entities/report-specification.entity';
import { InventoryAggregate } from './entities/inventory-aggregate.entity';
import { InventoryByAsin } from './entities/inventory-by-asin.entity';
import { InventoryReportService } from './inventory-report.service';
import { InventoryReportController } from './inventory-report.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportSpecification, InventoryAggregate, InventoryByAsin]),  // Register the entities here
  ],
  controllers: [InventoryReportController],
  providers: [InventoryReportService],
})
export class InventoryReportModule {}
