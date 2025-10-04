import { Module } from '@nestjs/common';
import { AccompagnementProdController } from './accompagnementProd.controller';
import { AccompagnementProdService } from './accompagnementProd.service';

@Module({
  controllers: [AccompagnementProdController],
  providers: [AccompagnementProdService],
})
export class AccompagnementProdModule {}
