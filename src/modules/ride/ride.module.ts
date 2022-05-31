import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideEntity } from './ride.entity';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RideEntity])],
  providers: [RideService],
  controllers: [RideController],
})
export class RideModule {}
