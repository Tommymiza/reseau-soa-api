import { Test, TestingModule } from '@nestjs/testing';
import { RepresentationProdController } from './representationProd.controller';
import { RepresentationProdService } from './representationProd.service';

describe('RepresentationProdController', () => {
  let controller: RepresentationProdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepresentationProdController],
      providers: [RepresentationProdService],
    }).compile();

    controller = module.get<RepresentationProdController>(
      RepresentationProdController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
