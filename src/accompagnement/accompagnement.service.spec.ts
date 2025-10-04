import { Test, TestingModule } from '@nestjs/testing';
import { AccompagnementOprService } from './accompagnement.service';

describe('AccompagnementOprService', () => {
  let service: AccompagnementOprService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccompagnementOprService],
    }).compile();

    service = module.get<AccompagnementOprService>(AccompagnementOprService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
