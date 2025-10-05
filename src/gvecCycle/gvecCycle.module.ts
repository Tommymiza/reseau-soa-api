import { Module } from '@nestjs/common';
import { GvecCycleController } from './gvecCycle.controller';
import { GvecCycleService } from './gvecCycle.service';

@Module({
  controllers: [GvecCycleController],
  providers: [GvecCycleService],
})
export class GvecCycleModule {}
