import { Module } from '@nestjs/common';
import { SpeculationController } from './speculation.controller';
import { SpeculationService } from './speculation.service';

@Module({
  controllers: [SpeculationController],
  providers: [SpeculationService],
})
export class SpeculationModule {}
