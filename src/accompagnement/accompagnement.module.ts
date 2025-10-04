import { Module } from '@nestjs/common';
import { AccompagnementOprController } from './accompagnement.controller';
import { AccompagnementOprService } from './accompagnement.service';

@Module({
  controllers: [AccompagnementOprController],
  providers: [AccompagnementOprService],
})
export class AccompagnementOprModule {}
