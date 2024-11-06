import { PartialType } from '@nestjs/mapped-types';
import { CreateAmazonAsincatalogDto } from './create-amazon-asincatalog.dto';

export class UpdateAmazonAsincatalogDto extends PartialType(CreateAmazonAsincatalogDto) {}
