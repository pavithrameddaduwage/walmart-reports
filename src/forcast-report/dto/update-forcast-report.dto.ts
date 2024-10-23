import { PartialType } from '@nestjs/mapped-types';
import { CreateForcastReportDto } from './create-forcast-report.dto';

export class UpdateForcastReportDto extends PartialType(CreateForcastReportDto) {}
