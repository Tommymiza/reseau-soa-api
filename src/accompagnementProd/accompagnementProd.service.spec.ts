import { Test, TestingModule } from '@nestjs/testing';
import { AccompagnementProdService } from './accompagnementProd.service';

describe('AccompagnementProdService', () => {
  let service: AccompagnementProdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccompagnementProdService],
    }).compile();

    service = module.get<AccompagnementProdService>(AccompagnementProdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
