import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reportType: string;

  @Column('json') // Change this type based on your JSON structure
  data: any; // Change this type based on the structure of the report data

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
