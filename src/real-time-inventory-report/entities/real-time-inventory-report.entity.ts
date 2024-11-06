import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("amazon_real_time_inventory")
export class RealTimeInventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', nullable: true, name: 'start_time' })  
    startTime: Date | null;

    @Column({ type: 'timestamp', nullable: true, name: 'end_time' })  
    endTime: Date | null;

    @Column({ nullable: false, name: 'asin' })
    asin: string;

    @Column({ type: 'int', nullable: true, name: 'highly_available_inventory' })
    highlyAvailableInventory: number | null;
}
