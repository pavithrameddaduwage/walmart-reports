import { IsString, IsBoolean, IsOptional, IsArray, IsObject, IsNumber, IsDate, IsInt } from 'class-validator';

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
    @IsObject({ each: true })
    refinementsBrands: Array<{ numberOfResults: number; brandName: string }>;

    @IsOptional()
    @IsArray()
    @IsObject({ each: true })
    refinementsClassifications: Array<{ numberOfResults: number; displayName: string; classificationId: string }>;

    // New fields added for extended details
    @IsOptional()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    currency: string;

    @IsOptional()
    @IsNumber()
    weight: number;

    @IsOptional()
    @IsString()
    weightUnit: string; // e.g., "kg" or "lbs"

    @IsOptional()
    @IsObject()
    dimensions: { length: number; width: number; height: number }; // Dimensions of the product

    @IsOptional()
    @IsBoolean()
    stockAvailability: boolean; // Whether the item is in stock or not

    @IsOptional()
    @IsInt()
    stockQuantity: number; // The available stock quantity

    @IsOptional()
    @IsString()
    imageUrl: string; // URL for the product image

    @IsOptional()
    @IsString()
    description: string; // A description of the product
}
