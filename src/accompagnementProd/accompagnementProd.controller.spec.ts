import { Test, TestingModule } from '@nestjs/testing';
import { AccompagnementProdController } from './accompagnementProd.controller';
import { AccompagnementProdService } from './accompagnementProd.service';

describe('AccompagnementProdController', () => {
  let controller: AccompagnementProdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccompagnementProdController],
      providers: [AccompagnementProdService],
    }).compile();

    controller = module.get<AccompagnementProdController>(
      AccompagnementProdController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
