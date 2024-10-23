// src/real-time-inventory-report/real-time-inventory.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RealTimeInventoryService } from './real-time-inventory-report.service';
import { RealTimeInventory } from './entities/real-time-inventory-report.entity';

@Controller('real-time-inventory-report')
export class RealTimeInventoryController {
    constructor(private readonly realTimeInventoryService: RealTimeInventoryService) {}

    @Post()
    async create(@Body() data: any): Promise<RealTimeInventory[]> {
        return this.realTimeInventoryService.createRealTimeInventory(data);
    }
}
