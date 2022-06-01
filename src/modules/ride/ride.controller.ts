import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RideDto } from './ride.dto';
import { RideService } from './ride.service';

import { RideEntity } from './ride.entity';
import {
  CreateRideResponse,
  FindAllRideResponse,
  RideObject,
} from './ride.response';

@ApiTags('Rides')
@Controller('rides')
export class RideController {
  constructor(
    private readonly rideService: RideService,
    private readonly loggerService: Logger,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create ride' })
  @ApiBody({ description: 'Ride object', type: RideDto })
  @ApiResponse({
    status: 201,
    description: 'The ride is successfully created',
    type: CreateRideResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() rideDto: RideDto): Promise<RideEntity> {
    const id = await this.rideService.create(rideDto);

    this.loggerService.log('Success create ride', { id });

    return this.rideService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rides' })
  @ApiResponse({
    status: 200,
    description: 'All rides',
    type: FindAllRideResponse,
  })
  @ApiResponse({ status: 404, description: 'Not found exception' })
  async findAll(): Promise<RideEntity[]> {
    const rides = await this.rideService.findAll();

    if (!rides.length) {
      throw new NotFoundException('Could not find any rides');
    }

    this.loggerService.log('Success get all rides', { length: rides.length });

    return rides;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one ride by id' })
  @ApiResponse({
    status: 200,
    description: 'Ride',
    type: RideObject,
  })
  @ApiResponse({ status: 404, description: 'Not found exception' })
  async findById(@Param('id') id: string): Promise<RideEntity> {
    const ride = await this.rideService.findById(Number(id));

    if (!ride) {
      throw new NotFoundException('Could not find any rides');
    }

    this.loggerService.log('Success get ride', { ride });

    return ride;
  }
}
