import { PartialType } from '@nestjs/mapped-types';
import { CreateRealTimeInventoryReportDto } from './create-real-time-inventory-report.dto';

export class UpdateRealTimeInventoryReportDto extends PartialType(CreateRealTimeInventoryReportDto) {}
