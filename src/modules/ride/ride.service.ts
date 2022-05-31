import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RideEntity } from './ride.entity';

import { RideDto } from './ride.dto';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(RideEntity)
    private readonly rideRepository: Repository<RideEntity>,
  ) {}

  async create(rideDto: RideDto): Promise<number> {
    const result = await this.rideRepository.insert(rideDto);
    return result.identifiers[0].rideID;
  }

  findAll(): Promise<RideEntity[]> {
    return this.rideRepository.find();
  }

  findById(id: number): Promise<RideEntity> {
    return this.rideRepository.findOneBy({ rideID: id });
  }

  async removeAll(): Promise<void> {
    await this.rideRepository.delete({});
  }
}
