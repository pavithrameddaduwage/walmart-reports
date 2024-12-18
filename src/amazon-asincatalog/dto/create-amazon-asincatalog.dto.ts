import { IsString, IsBoolean, IsOptional, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DeepPartial } from 'typeorm';

class BrowseClassificationDto {
  @IsString()
  displayName: string;

  @IsString()
  classificationId: string;
}

class SummaryDto {
  @IsString()
  asin: string;

  @IsString()
  marketplaceId: string;

  @IsBoolean()
  adultProduct: boolean;

  @IsBoolean()
  autographed: boolean;

  @IsString()
  brand: string;

  @ValidateNested()
  @Type(() => BrowseClassificationDto)
  browseClassification: BrowseClassificationDto;

  @IsString()
  color: string;

  @IsString()
  itemClassification: string;

  @IsString()
  itemName: string;

  @IsString()
  manufacturer: string;

  @IsString()
  modelNumber: string;

  @IsNumber()
  packageQuantity: number;

  @IsString()
  partNumber: string;

  @IsString()
  releaseDate: string;

  @IsString()
  style: string;

  @IsBoolean()
  tradeInEligible: boolean;

  @IsString()
  websiteDisplayGroup: string;

  @IsString()
  websiteDisplayGroupName: string;
  memorabilia: DeepPartial<boolean>;
}

class ItemDto {
  @IsString()
  asin: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SummaryDto)
  summaries: SummaryDto[];
}

export class CreateAmazonAsincatalogDto {
  @IsOptional()
  @IsString()
  asin: string | null;

  @IsOptional()
  @IsString()
  marketplaceId: string;

  @IsOptional()
  @IsBoolean()
  adultProduct: boolean;

  @IsOptional()
  @IsBoolean()
  autographed: boolean;

  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  browseClassificationDisplayName: string;

  @IsOptional()
  @IsString()
  browseClassificationId: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  itemClassification: string;

  @IsOptional()
  @IsString()
  itemName: string;

  @IsOptional()
  @IsString()
  manufacturer: string;

  @IsOptional()
  @IsBoolean()
  memorabilia: boolean;

  @IsOptional()
  @IsString()
  modelNumber: string;

  @IsOptional()
  @IsNumber()
  packageQuantity: number;

  @IsOptional()
  @IsString()
  partNumber: string;

  @IsOptional()
  @IsString()
  releaseDate: string;

  @IsOptional()
  @IsString()
  style: string;

  @IsOptional()
  @IsBoolean()
  tradeInEligible: boolean;

  @IsOptional()
  @IsString()
  websiteDisplayGroup: string;

  @IsOptional()
  @IsString()
  websiteDisplayGroupName: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}
