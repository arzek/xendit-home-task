import { RideDto } from './ride.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RideObject extends RideDto {
  @ApiProperty({ default: '1' })
  rideID: number;

  @ApiProperty({ default: '2022-05-31T11:16:02.666Z' })
  created: Date;
}

export class CreateRideResponse {
  @ApiProperty({ type: RideObject })
  data: RideObject;
}

export class FindAllRideResponse {
  @ApiProperty({ type: RideObject, isArray: true })
  data: RideObject[];
}
