import { PartialType } from '@nestjs/mapped-types';
import { CreateRealTimeTrafficReportDto } from './create-real-time-traffic-report.dto';

export class UpdateRealTimeTrafficReportDto extends PartialType(CreateRealTimeTrafficReportDto) {}
