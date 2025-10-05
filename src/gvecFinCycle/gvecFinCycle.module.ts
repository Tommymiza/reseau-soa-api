import { Module } from '@nestjs/common';
import { GvecFinCycleController } from './gvecFinCycle.controller';
import { GvecFinCycleService } from './gvecFinCycle.service';

@Module({
  controllers: [GvecFinCycleController],
  providers: [GvecFinCycleService],
})
export class GvecFinCycleModule {}
