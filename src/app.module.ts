import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,
      username: 'postgres', // Change to your PostgreSQL username
      password: '0006', // Change to your PostgreSQL password
      database: 'walmart-API', // Change to your PostgreSQL database
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Use only in development
    }),
    ReportModule,
  ],
})
export class AppModule {}
