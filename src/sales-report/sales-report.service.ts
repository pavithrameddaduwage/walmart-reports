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
        customerReturns: aggregate.customerReturns || 0,
        orderedRevenueAmount: aggregate.orderedRevenue?.amount || 0,
        orderedRevenueCurrency: aggregate.orderedRevenue?.currencyCode || 'USD',
        orderedUnits: aggregate.orderedUnits || 0,
        shippedCogsAmount: aggregate.shippedCogs?.amount || 0,
        shippedCogsCurrency: aggregate.shippedCogs?.currencyCode || 'USD',
        shippedRevenueAmount: aggregate.shippedRevenue?.amount || 0,
        shippedRevenueCurrency: aggregate.shippedRevenue?.currencyCode || 'USD',
        shippedUnits: aggregate.shippedUnits || 0,
      });

      const savedAggregate = await this.salesAggregateRepository.save(newAggregate);

      for (const asin of salesByAsinData) {
        const newAsinData = this.salesByAsinRepository.create({
          salesAggregate: savedAggregate,
          startDate: asin.startDate,
          endDate: asin.endDate,
          asin: asin.asin || '',
          customerReturns: asin.customerReturns || 0,
          orderedRevenueAmount: asin.orderedRevenue?.amount || 0,
          orderedRevenueCurrency: asin.orderedRevenue?.currencyCode || 'USD',
          orderedUnits: asin.orderedUnits || 0,
          shippedCogsAmount: asin.shippedCogs?.amount || 0,
          shippedCogsCurrency: asin.shippedCogs?.currencyCode || 'USD',
          shippedRevenueAmount: asin.shippedRevenue?.amount || 0,
          shippedRevenueCurrency: asin.shippedRevenue?.currencyCode || 'USD',
          shippedUnits: asin.shippedUnits || 0,
        });

        await this.salesByAsinRepository.save(newAsinData);
      }
    }
  }
}
