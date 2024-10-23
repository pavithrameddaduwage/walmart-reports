import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesReportModule } from './sales-report/sales-report.module';
import { InventoryReportModule } from './inventory-report/inventory-report.module';
import { ForcastReportModule } from './forcast-report/forcast-report.module';
import { TrafficReportModule } from './traffic-report/traffic-report.module';
import { NetPureReportModule } from './netpure-report/netpure-report.module';
import { RealTimeInventoryReportModule } from './real-time-inventory-report/real-time-inventory-report.module';
import { RealTimeTrafficReportModule } from './real-time-traffic-report/real-time-traffic-report.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,
      username: 'postgres',  
      password: '0006',  
      database: 'walmart',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  
    }),
    SalesReportModule,
    InventoryReportModule,
    ForcastReportModule,
    TrafficReportModule,
    NetPureReportModule,
    RealTimeInventoryReportModule,
    RealTimeTrafficReportModule,
  ],
})
export class AppModule {}
