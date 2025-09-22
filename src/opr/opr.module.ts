import { Module } from '@nestjs/common';
import { OprController } from './opr.controller';
import { OprService } from './opr.service';

@Module({
  controllers: [OprController],
  providers: [OprService],
})
export class OprModule {}
