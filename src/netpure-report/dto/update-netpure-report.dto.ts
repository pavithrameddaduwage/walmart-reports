import { PartialType } from '@nestjs/mapped-types';
import { CreateNetpureReportDto } from './create-netpure-report.dto';

export class UpdateNetpureReportDto extends PartialType(CreateNetpureReportDto) {}
