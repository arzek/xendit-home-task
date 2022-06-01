import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { RideModule } from './modules/ride/ride.module';
import { HealthModule } from './modules/health/health.module';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot({}),
    DatabaseModule,
    RideModule,
    HealthModule,
  ],
})
export class AppModule {}
