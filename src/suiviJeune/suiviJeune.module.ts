import { Module } from '@nestjs/common';
import { SuiviJeuneController } from './suiviJeune.controller';
import { SuiviJeuneService } from './suiviJeune.service';

@Module({
  controllers: [SuiviJeuneController],
  providers: [SuiviJeuneService],
})
export class SuiviJeuneModule {}
