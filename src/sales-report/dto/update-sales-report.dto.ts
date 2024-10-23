import { PartialType } from "@nestjs/mapped-types";
import { CreateSalesReportDto, ReportOptionsDto, ReportSpecificationDto, SalesAggregateDto, SalesByAsinDto } from "./create-sales-report.dto";

export class UpdateSalesReportDto extends PartialType(CreateSalesReportDto) {}

export class UpdateReportSpecificationDto extends PartialType(ReportSpecificationDto) {}

export class UpdateReportOptionsDto extends PartialType(ReportOptionsDto) {}

export class UpdateSalesAggregateDto extends PartialType(SalesAggregateDto) {}

export class UpdateSalesByAsinDto extends PartialType(SalesByAsinDto) {}