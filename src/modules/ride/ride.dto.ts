import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RideDto {
  @ApiProperty({ default: '70', minimum: -90, maximum: 90 })
  @Min(-90)
  @Max(90)
  @IsNotEmpty()
  @IsNumber()
  startLat: number;

  @ApiProperty({ default: '160' })
  @Min(-180)
  @Max(180)
  @IsNotEmpty()
  @IsNumber()
  startLong: number;

  @ApiProperty({ default: '90' })
  @Min(-90)
  @Max(90)
  @IsNotEmpty()
  @IsNumber()
  endLat: number;

  @ApiProperty({ default: '160' })
  @Min(-180)
  @Max(180)
  @IsNotEmpty()
  @IsNumber()
  endLong: number;

  @ApiProperty({ default: 'riderName' })
  @IsNotEmpty()
  @IsString()
  riderName: string;

  @ApiProperty({ default: 'driverName' })
  @IsNotEmpty()
  @IsString()
  driverName: string;

  @ApiProperty({ default: 'driverVehicle' })
  @IsNotEmpty()
  @IsString()
  driverVehicle: string;
}
