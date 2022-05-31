import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideEntity } from './ride.entity';

@Module({ imports: [TypeOrmModule.forFeature([RideEntity])] })
export class RideModule {}
