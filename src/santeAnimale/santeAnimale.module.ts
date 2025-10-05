import { Module } from '@nestjs/common';
import { SanteAnimaleController } from './santeAnimale.controller';
import { SanteAnimaleService } from './santeAnimale.service';

@Module({
  controllers: [SanteAnimaleController],
  providers: [SanteAnimaleService],
})
export class SanteAnimaleModule {}
