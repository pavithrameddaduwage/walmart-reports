import { Controller, Post, Body } from '@nestjs/common';
import {AmazonAsinCatalogService} from './amazon-asincatalog.service';
import { CreateAmazonAsincatalogDto } from './dto/create-amazon-asincatalog.dto';

@Controller('catalog')
export class AmazonAsinCatalogController {
  constructor(private readonly catalogService: AmazonAsinCatalogService) {}

  @Post()
  async create(@Body() data: CreateAmazonAsincatalogDto) {
    console.log('Received data:', data);
    return await this.catalogService.create(data);
  }

  @Post('bulk')
  async createBulk(@Body() data: CreateAmazonAsincatalogDto[]) {
    console.log('Received bulk data:', data);
    return await this.catalogService.createBulk(data);
  }
}
