import { Module } from '@nestjs/common';
import { JeuneController } from './jeune.controller';
import { JeuneService } from './jeune.service';

@Module({
  controllers: [JeuneController],
  providers: [JeuneService],
})
export class JeuneModule {}
