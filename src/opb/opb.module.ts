import { Module } from '@nestjs/common';
import { OpbController } from './opb.controller';
import { OpbService } from './opb.service';

@Module({
  controllers: [OpbController],
  providers: [OpbService],
})
export class OpbModule {}
