import { Test, TestingModule } from '@nestjs/testing';
import { RepresentationProdService } from './representationProd.service';

describe('RepresentationProdService', () => {
  let service: RepresentationProdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepresentationProdService],
    }).compile();

    service = module.get<RepresentationProdService>(RepresentationProdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
