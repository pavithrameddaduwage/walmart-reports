import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAmazonAsincatalogDto } from './dto/create-amazon-asincatalog.dto';
import { AmazonAsinCatalog } from './entities/amazon-asincatalog.entity';

@Injectable()
export class AmazonAsinCatalogService {
  private readonly logger = new Logger(AmazonAsinCatalogService.name);

  constructor(
    @InjectRepository(AmazonAsinCatalog)
    private readonly amazonAsinCatalogRepository: Repository<AmazonAsinCatalog>,
  ) {}

  // Create a single catalog entry
  async create(data: CreateAmazonAsincatalogDto): Promise<AmazonAsinCatalog> {
    const { items } = data;

    // Ensure the ASIN is present and log it for debugging
    const asin = items[0]?.asin;
    this.logger.debug(`Creating catalog entry with ASIN: ${asin}`);

    if (!asin) {
      throw new Error('ASIN is missing or invalid.');
    }

    // Ensure summaries data is available
    if (items && items.length > 0 && items[0].summaries && items[0].summaries.length > 0) {
      const summary = items[0].summaries[0];

      const catalogEntry = this.amazonAsinCatalogRepository.create({
        asin: asin,
        marketplaceId: summary.marketplaceId,
        brand: summary.brand,
        browseClassificationDisplayName: summary.browseClassification?.displayName,
        browseClassificationId: summary.browseClassification?.classificationId,
        color: summary.color,
        itemClassification: summary.itemClassification,
        itemName: summary.itemName,
        manufacturer: summary.manufacturer,
        modelNumber: summary.modelNumber,
        packageQuantity: summary.packageQuantity,
        partNumber: summary.partNumber,
        releaseDate: summary.releaseDate,
        style: summary.style,
        websiteDisplayGroup: summary.websiteDisplayGroup,
        websiteDisplayGroupName: summary.websiteDisplayGroupName,
        adultProduct: summary.adultProduct,
        autographed: summary.autographed,
        memorabilia: summary.memorabilia,
        tradeInEligible: summary.tradeInEligible,
      });

      return await this.amazonAsinCatalogRepository.save(catalogEntry);
    } else {
      throw new Error('Summaries data is missing or invalid.');
    }
  }

  // Create multiple catalog entries (bulk)
  async createBulk(data: CreateAmazonAsincatalogDto[]): Promise<AmazonAsinCatalog[]> {
    const catalogEntries = [];

    for (const item of data) {
      const { items } = item;

      // Ensure the ASIN is present and log it for debugging
      const asin = items[0]?.asin;
      this.logger.debug(`Creating catalog entry with ASIN: ${asin}`);

      if (!asin) {
        throw new Error('ASIN is missing or invalid.');
      }

      // Ensure summaries data is available
      if (items && items.length > 0 && items[0].summaries && items[0].summaries.length > 0) {
        const summary = items[0].summaries[0];

        const catalogEntry = this.amazonAsinCatalogRepository.create({
          asin: asin,
          marketplaceId: summary.marketplaceId,
          brand: summary.brand,
          browseClassificationDisplayName: summary.browseClassification?.displayName,
          browseClassificationId: summary.browseClassification?.classificationId,
          color: summary.color,
          itemClassification: summary.itemClassification,
          itemName: summary.itemName,
          manufacturer: summary.manufacturer,
          modelNumber: summary.modelNumber,
          packageQuantity: summary.packageQuantity,
          partNumber: summary.partNumber,
          releaseDate: summary.releaseDate,
          style: summary.style,
          websiteDisplayGroup: summary.websiteDisplayGroup,
          websiteDisplayGroupName: summary.websiteDisplayGroupName,
          adultProduct: summary.adultProduct,
          autographed: summary.autographed,
          memorabilia: summary.memorabilia,
          tradeInEligible: summary.tradeInEligible,
        });

        catalogEntries.push(catalogEntry);
      } else {
        throw new Error('Some item summaries are missing or invalid.');
      }
    }

    return await this.amazonAsinCatalogRepository.save(catalogEntries);
  }
}
