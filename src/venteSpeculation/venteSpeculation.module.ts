import { Module } from '@nestjs/common';
import { VenteSpeculationController } from './venteSpeculation.controller';
import { VenteSpeculationService } from './venteSpeculation.service';

@Module({
  controllers: [VenteSpeculationController],
  providers: [VenteSpeculationService],
})
export class VenteSpeculationModule {}
