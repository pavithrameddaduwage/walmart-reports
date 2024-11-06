import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('amazon_asin_catalog')
export class AmazonAsinCatalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    asin: string | null;

    @Column({ nullable: true })
    marketplaceId: string;

    @Column({ default: false })
    adultProduct: boolean;

    @Column({ default: false })
    autographed: boolean;

    @Column({ nullable: true })
    brand: string;

    @Column({ nullable: true })
    browseClassificationDisplayName: string;

    @Column({ nullable: true })
    browseClassificationId: string;

    @Column({ nullable: true })
    color: string;

    @Column({ nullable: true })
    itemClassification: string;

    @Column({ nullable: true })
    itemName: string;

    @Column({ nullable: true })
    manufacturer: string;

    @Column({ default: false })
    memorabilia: boolean;

    @Column({ nullable: true })
    modelNumber: string;

    @Column({ nullable: true })
    packageQuantity: number;

    @Column({ nullable: true })
    partNumber: string;

    @Column({ nullable: true })
    releaseDate: string;

    @Column({ nullable: true })
    style: string;

    @Column({ default: false })
    tradeInEligible: boolean;

    @Column({ nullable: true })
    websiteDisplayGroup: string;

    @Column({ nullable: true })
    websiteDisplayGroupName: string;

    // For Refinements
    @Column({ nullable: true, type: 'jsonb' })
    refinementsBrands: Array<{ numberOfResults: number; brandName: string }>;

    @Column({ nullable: true, type: 'jsonb' })
    refinementsClassifications: Array<{ numberOfResults: number; displayName: string; classificationId: string }>;
}
