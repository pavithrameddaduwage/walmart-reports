import { IsNumber, IsString, IsOptional, IsDate, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ReportOptions {
    @IsString()
    sellingProgram: string;
}

class ReportSpecification {
    @IsString()
    reportType: string;

    @ValidateNested()
    @Type(() => ReportOptions)
    reportOptions: ReportOptions;

    @IsDate()
    lastUpdatedDate: Date;

    @IsOptional()
    @IsDate()
    dataStartTime?: Date;

    @IsOptional()
    @IsDate()
    dataEndTime?: Date;

    @IsArray()
    @IsString({ each: true })
    marketplaceIds: string[];
}

export class CreateForecastByAsinDto {
    @IsDate()
    forecastGenerationDate: Date;

    @IsString()
    asin: string;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsNumber()
    meanForecastUnits: number;

    @IsNumber()
    p70ForecastUnits: number;

    @IsNumber()
    p80ForecastUnits: number;

    @IsNumber()
    p90ForecastUnits: number;
}

export class CreateForcastReportDto {
    @ValidateNested()
    @Type(() => ReportSpecification)
    reportSpecification: ReportSpecification;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateForecastByAsinDto)
    forecastByAsin: CreateForecastByAsinDto[];
}
export class ForecastByAsinResponseDto {
    forecastGenerationDate: Date;
    asin: string;
    startDate: Date;
    endDate: Date;
    meanForecastUnits: number;
    p70ForecastUnits: number;
    p80ForecastUnits: number;
    p90ForecastUnits: number;
}

export class ForecastReportResponseDto {
    id: number;
    reportType: string;
    lastUpdatedDate: Date;
    dataStartTime?: Date;
    dataEndTime?: Date;
    marketplaceIds: string[];
    forecastByAsins: ForecastByAsinResponseDto[];
}
