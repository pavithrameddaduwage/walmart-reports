import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmazonAsinCatalogService } from './amazon-asincatalog.service';
import { AmazonAsinCatalogController } from './amazon-asincatalog.controller';
import { AmazonAsinCatalog } from './entities/amazon-asincatalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AmazonAsinCatalog])],
  controllers: [AmazonAsinCatalogController],
  providers: [AmazonAsinCatalogService],
  exports: [AmazonAsinCatalogService],
})
export class AmazonAsinCatalogModule {}
