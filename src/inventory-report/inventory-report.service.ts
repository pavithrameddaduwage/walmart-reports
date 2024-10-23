import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportSpecification } from './entities/report-specification.entity';
import { InventoryAggregate } from './entities/inventory-aggregate.entity';
import { InventoryByAsin } from './entities/inventory-by-asin.entity';

@Injectable()
export class InventoryReportService {
  constructor(
    @InjectRepository(InventoryByAsin)
    private readonly inventoryByAsinRepository: Repository<InventoryByAsin>,
    @InjectRepository(InventoryAggregate)
    private readonly inventoryAggregateRepository: Repository<InventoryAggregate>,
    @InjectRepository(ReportSpecification)
    private readonly reportSpecificationRepository: Repository<ReportSpecification>,
  ) {}

  async createReport(reportData: any): Promise<void> {
    const { reportSpecification, inventoryAggregate, inventoryByAsin } = reportData;

    // Handle the ReportSpecification
    const reportSpec = this.reportSpecificationRepository.create(reportSpecification);
    await this.reportSpecificationRepository.save(reportSpec);

    // Handle InventoryAggregate
    for (const aggregate of inventoryAggregate) {
      const inventoryAggregateEntity = this.inventoryAggregateRepository.create({
        ...aggregate,
        netReceivedInventoryCostAmount: aggregate.netReceivedInventoryCost?.amount || 0,
        netReceivedInventoryCostCurrencyCode: aggregate.netReceivedInventoryCost?.currencyCode || 'USD',
        sellableOnHandInventoryCostAmount: aggregate.sellableOnHandInventoryCost?.amount || 0,
        sellableOnHandInventoryCostCurrencyCode: aggregate.sellableOnHandInventoryCost?.currencyCode || 'USD',
        unsellableOnHandInventoryCostAmount: aggregate.unsellableOnHandInventoryCost?.amount || 0,
        unsellableOnHandInventoryCostCurrencyCode: aggregate.unsellableOnHandInventoryCost?.currencyCode || 'USD',
        aged90PlusDaysSellableInventoryCostAmount: aggregate.aged90PlusDaysSellableInventoryCost?.amount || 0,
        aged90PlusDaysSellableInventoryCostCurrencyCode: aggregate.aged90PlusDaysSellableInventoryCost?.currencyCode || 'USD',
        report: reportSpec,
      });
      await this.inventoryAggregateRepository.save(inventoryAggregateEntity);
    }

    // Handle InventoryByAsin
    for (const asin of inventoryByAsin) {
      const inventoryByAsinEntity = this.inventoryByAsinRepository.create({
        ...asin,
        netReceivedInventoryCostAmount: asin.netReceivedInventoryCost?.amount || 0,
        netReceivedInventoryCostCurrencyCode: asin.netReceivedInventoryCost?.currencyCode || 'USD',
        sellableOnHandInventoryCostAmount: asin.sellableOnHandInventoryCost?.amount || 0,
        sellableOnHandInventoryCostCurrencyCode: asin.sellableOnHandInventoryCost?.currencyCode || 'USD',
        unsellableOnHandInventoryCostAmount: asin.unsellableOnHandInventoryCost?.amount || 0,
        unsellableOnHandInventoryCostCurrencyCode: asin.unsellableOnHandInventoryCost?.currencyCode || 'USD',
        aged90PlusDaysSellableInventoryCostAmount: asin.aged90PlusDaysSellableInventoryCost?.amount || 0,
        aged90PlusDaysSellableInventoryCostCurrencyCode: asin.aged90PlusDaysSellableInventoryCost?.currencyCode || 'USD',
        report: reportSpec,
      });
      await this.inventoryByAsinRepository.save(inventoryByAsinEntity);
    }
  }
}
