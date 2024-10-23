import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesByAsin } from './entities/sales-by-asin.entity';
import { SalesAggregate } from './entities/sales-aggregate.entity';

@Injectable()
export class SalesReportService {
  constructor(
    @InjectRepository(SalesAggregate)
    private salesAggregateRepository: Repository<SalesAggregate>,

    @InjectRepository(SalesByAsin)
    private salesByAsinRepository: Repository<SalesByAsin>,
  ) {}

  async createSalesReport(data: any): Promise<void> {
    const reportSpec = data.reportSpecification || {};
    const salesAggregatesData = data.salesAggregate || [];
    const salesByAsinData = data.salesByAsin || [];

    for (const aggregate of salesAggregatesData) {
      const newAggregate = this.salesAggregateRepository.create({
        startDate: aggregate.startDate,
        endDate: aggregate.endDate,
        customerReturns: aggregate.customerReturns,
        orderedRevenueAmount: aggregate.orderedRevenue.amount,
        orderedRevenueCurrency: aggregate.orderedRevenue.currencyCode,
        orderedUnits: aggregate.orderedUnits,
        shippedCogsAmount: aggregate.shippedCogs.amount,
        shippedCogsCurrency: aggregate.shippedCogs.currencyCode,
        shippedRevenueAmount: aggregate.shippedRevenue.amount,
        shippedRevenueCurrency: aggregate.shippedRevenue.currencyCode,
        shippedUnits: aggregate.shippedUnits,
      });

      const savedAggregate = await this.salesAggregateRepository.save(newAggregate);

    
      for (const asin of salesByAsinData) {
        const newAsinData = this.salesByAsinRepository.create({
          salesAggregate: savedAggregate,
          startDate: asin.startDate,
          endDate: asin.endDate,
          asin: asin.asin,
          customerReturns: asin.customerReturns,
          orderedRevenueAmount: asin.orderedRevenue.amount,
          orderedRevenueCurrency: asin.orderedRevenue.currencyCode,
          orderedUnits: asin.orderedUnits,
          shippedCogsAmount: asin.shippedCogs.amount,
          shippedCogsCurrency: asin.shippedCogs.currencyCode,
          shippedRevenueAmount: asin.shippedRevenue.amount,
          shippedRevenueCurrency: asin.shippedRevenue.currencyCode,
          shippedUnits: asin.shippedUnits,
        });

        await this.salesByAsinRepository.save(newAsinData);
      }
    }
  }
}