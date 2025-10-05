import { Module } from '@nestjs/common';
import { AchatController } from './achat.controller';
import { AchatService } from './achat.service';

@Module({
  controllers: [AchatController],
  providers: [AchatService],
})
export class AchatModule {}
