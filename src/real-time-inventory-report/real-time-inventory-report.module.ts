// src/real-time-inventory-report/real-time-inventory-report.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealTimeInventory } from './entities/real-time-inventory-report.entity';
import { RealTimeInventoryService } from './real-time-inventory-report.service';
import { RealTimeInventoryController } from './real-time-inventory-report.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RealTimeInventory])],
    controllers: [RealTimeInventoryController],
    providers: [RealTimeInventoryService],
})
export class RealTimeInventoryReportModule {}
