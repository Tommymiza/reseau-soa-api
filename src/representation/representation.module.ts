import { Module } from '@nestjs/common';
import { RepresentationController } from './representation.controller';
import { RepresentationService } from './representation.service';

@Module({
  controllers: [RepresentationController],
  providers: [RepresentationService],
})
export class RepresentationModule {}
