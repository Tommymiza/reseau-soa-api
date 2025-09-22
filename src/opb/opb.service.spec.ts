import { Test, TestingModule } from '@nestjs/testing';
import { OpbService } from './opb.service';

describe('OpbService', () => {
  let service: OpbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpbService],
    }).compile();

    service = module.get<OpbService>(OpbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
