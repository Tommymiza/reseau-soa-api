import { Module } from '@nestjs/common';
import { RepresentationProdController } from './representationProd.controller';
import { RepresentationProdService } from './representationProd.service';

@Module({
  controllers: [RepresentationProdController],
  providers: [RepresentationProdService],
})
export class RepresentationProdModule {}
