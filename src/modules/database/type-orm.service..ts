import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import * as winston from 'winston';
import { WinstonAdaptor } from 'typeorm-logger-adaptor/logger/winston';

import { RideEntity } from '../ride/ride.entity';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
});

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
      logger: new WinstonAdaptor(logger, 'all'),
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}
