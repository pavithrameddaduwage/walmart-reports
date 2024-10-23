import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { InventoryAggregate } from './inventory-aggregate.entity';
import { InventoryByAsin } from './inventory-by-asin.entity';

@Entity()
export class ReportSpecification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reportType: string;

  @Column({ nullable: true })  
  reportPeriod: string;

  @Column({ nullable: true })  // Allow null values
  sellingProgram: string;

  @Column({ nullable: true })  // Allow null values
  distributorView: string;

  @Column({ type: 'date', nullable: true })  // Allow null and handle date fields
  lastUpdatedDate: Date;

  @Column({ type: 'date', nullable: true })  // Allow null values
  dataStartTime: Date;

  @Column({ type: 'date', nullable: true })  // Allow null values
  dataEndTime: Date;

  @Column('simple-array', { nullable: true })  // Allow null or empty arrays
  marketplaceIds: string[];

  @OneToMany(() => InventoryAggregate, (inventoryAggregate) => inventoryAggregate.report)
  inventoryAggregates: InventoryAggregate[];

  @OneToMany(() => InventoryByAsin, (inventoryByAsin) => inventoryByAsin.report)
  inventoryByAsins: InventoryByAsin[];
}
