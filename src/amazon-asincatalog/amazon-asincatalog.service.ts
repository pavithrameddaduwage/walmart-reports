import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { CreateAmazonAsincatalogDto } from './dto/create-amazon-asincatalog.dto';
import { AmazonAsinCatalog } from './entities/amazon-asincatalog.entity';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AmazonAsinCatalogService {
    constructor(
        @InjectRepository(AmazonAsinCatalog)
        private readonly amazonAsinCatalogRepository: Repository<AmazonAsinCatalog>,
    ) {}

    // Create a single catalog entry
    async create(data: CreateAmazonAsincatalogDto): Promise<AmazonAsinCatalog> {
        try {
            const catalogEntry = this.amazonAsinCatalogRepository.create(data);
            return await this.amazonAsinCatalogRepository.save(catalogEntry);
        } catch (error) {
            throw new InternalServerErrorException(`Error creating catalog entry: ${error.message}`);
        }
    }

    // Create multiple catalog entries
    async createBulk(data: CreateAmazonAsincatalogDto[]): Promise<AmazonAsinCatalog[]> {
        const manager = this.amazonAsinCatalogRepository.manager; // Use manager for transactions
        const queryRunner = manager.connection.createQueryRunner();

        try {
            // Start a transaction
            await queryRunner.startTransaction();

            const catalogEntries = this.amazonAsinCatalogRepository.create(data);
            const savedEntries = await queryRunner.manager.save(AmazonAsinCatalog, catalogEntries);

            // Commit the transaction if successful
            await queryRunner.commitTransaction();
            return savedEntries;
        } catch (error) {
            // Rollback the transaction in case of an error
            await queryRunner.rollbackTransaction();
            throw new InternalServerErrorException(`Error creating bulk catalog entries: ${error.message}`);
        } finally {
            // Release the query runner to free resources
            await queryRunner.release();
        }
    }
}
