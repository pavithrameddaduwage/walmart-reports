import { PartialType } from '@nestjs/mapped-types';
import { CreateTrafficReportDto } from './create-traffic-report.dto';

export class UpdateTrafficReportDto extends PartialType(CreateTrafficReportDto) {}
