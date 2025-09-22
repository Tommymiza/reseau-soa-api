import { Test, TestingModule } from '@nestjs/testing';
import { OprService } from './opr.service';

describe('OprService', () => {
  let service: OprService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OprService],
    }).compile();

    service = module.get<OprService>(OprService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
