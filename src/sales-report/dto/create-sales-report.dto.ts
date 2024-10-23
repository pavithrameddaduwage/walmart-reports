export class CreateSalesReportDto {
    reportSpecification: ReportSpecificationDto;
    salesAggregate: SalesAggregateDto[];
    salesByAsin: SalesByAsinDto[];
  }
  
  export class ReportSpecificationDto {
    reportType: string;
    reportOptions: ReportOptionsDto;
    lastUpdatedDate: Date;
    dataStartTime: Date;
    dataEndTime: Date;
    marketplaceIds: string[];
  }
  
  export class ReportOptionsDto {
    reportPeriod: string;
    sellingProgram: string;
    distributorView: string;
  }
  
  export class SalesAggregateDto {
    startDate: Date;
    endDate: Date;
    customerReturns: number;
    orderedRevenue: CurrencyAmountDto;
    orderedUnits: number;
    shippedCogs: CurrencyAmountDto;
    shippedRevenue: CurrencyAmountDto;
    shippedUnits: number;
  }
  
  export class SalesByAsinDto {
    startDate: Date;
    endDate: Date;
    asin: string;
    customerReturns: number;
    orderedRevenue: CurrencyAmountDto;
    orderedUnits: number;
    shippedCogs: CurrencyAmountDto;
    shippedRevenue: CurrencyAmountDto;
    shippedUnits: number;
  }
  
  export class CurrencyAmountDto {
    amount: number;
    currencyCode: string;
  }
  