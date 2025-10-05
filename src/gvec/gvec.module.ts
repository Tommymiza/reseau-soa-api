import { Module } from '@nestjs/common';
import { GvecController } from './gvec.controller';
import { GvecService } from './gvec.service';

@Module({
  controllers: [GvecController],
  providers: [GvecService],
})
export class GvecModule {}
