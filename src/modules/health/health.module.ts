import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
