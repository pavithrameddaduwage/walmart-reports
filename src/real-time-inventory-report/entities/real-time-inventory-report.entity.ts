 
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RealTimeInventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', nullable: false })
    startTime: Date;

    @Column({ type: 'timestamp', nullable: false })
    endTime: Date;

    @Column({ nullable: false })
    asin: string;

    @Column({ type: 'int', nullable: false })
    highlyAvailableInventory: number;
}
