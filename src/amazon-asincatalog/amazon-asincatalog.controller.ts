import { Controller, Post, Body } from '@nestjs/common';
import { AmazonAsinCatalogService } from './amazon-asincatalog.service';
import { CreateAmazonAsincatalogDto } from './dto/create-amazon-asincatalog.dto';

@Controller('catalog')
export class AmazonAsinCatalogController {
    constructor(private readonly catalogService: AmazonAsinCatalogService) {}

    // Endpoint for creating a single catalog entry
    @Post()
    async create(@Body() data: CreateAmazonAsincatalogDto) {
        return await this.catalogService.create(data);
    }

    // Endpoint for creating multiple catalog entries
    @Post('bulk')
    async createBulk(@Body() data: CreateAmazonAsincatalogDto[]) {
        return await this.catalogService.createBulk(data);
    }
}
