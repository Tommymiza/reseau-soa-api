import { Module } from '@nestjs/common';
import { GvecRealisationController } from './gvecRealisation.controller';
import { GvecRealisationService } from './gvecRealisation.service';

@Module({
  controllers: [GvecRealisationController],
  providers: [GvecRealisationService],
})
export class GvecRealisationModule {}
