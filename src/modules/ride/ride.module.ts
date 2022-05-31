import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideEntity } from './ride.entity';
import { RideService } from './service/ride.service';
import { RideController } from './controller/ride.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RideEntity])],
  providers: [RideService],
  controllers: [RideController],
})
export class RideModule {}
