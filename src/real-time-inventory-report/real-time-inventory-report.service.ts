// src/real-time-inventory-report/real-time-inventory.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealTimeInventory } from './entities/real-time-inventory-report.entity';

@Injectable()
export class RealTimeInventoryService {
    constructor(
        @InjectRepository(RealTimeInventory)
        private readonly realTimeInventoryRepository: Repository<RealTimeInventory>,
    ) {}

    async createRealTimeInventory(data: any): Promise<RealTimeInventory[]> {
        const inventoryRecords = data.reportData.map(item => {
            return this.realTimeInventoryRepository.create({
                startTime: new Date(item.startTime),
                endTime: new Date(item.endTime),
                asin: item.asin,
                highlyAvailableInventory: item.highlyAvailableInventory,
            });
        });

        return await this.realTimeInventoryRepository.save(inventoryRecords);
    }
}
