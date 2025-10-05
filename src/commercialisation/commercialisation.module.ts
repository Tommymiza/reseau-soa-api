import { Module } from '@nestjs/common';
import { CommercialisationController } from './commercialisation.controller';
import { CommercialisationService } from './commercialisation.service';

@Module({
  controllers: [CommercialisationController],
  providers: [CommercialisationService],
})
export class CommercialisationModule {}
