import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { RideEntity } from '../ride/ride.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('PGHOST'),
      port: +this.configService.get<number>('PGPORT'),
      username: this.configService.get<string>('PGUSER'),
      password: this.configService.get<string>('PGPASSWORD'),
      database: this.configService.get<string>('PGDATABASE'),
      entities: [RideEntity],
      keepConnectionAlive: true,
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}
