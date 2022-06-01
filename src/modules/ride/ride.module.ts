import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideEntity } from './ride.entity';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [TypeOrmModule.forFeature([RideEntity]), WinstonModule.forRoot({})],
  providers: [RideService],
  controllers: [RideController],
})
export class RideModule {}
