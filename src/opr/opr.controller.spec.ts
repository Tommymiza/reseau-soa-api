import { Test, TestingModule } from '@nestjs/testing';
import { OprController } from './opr.controller';
import { OprService } from './opr.service';

describe('OprController', () => {
  let controller: OprController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OprController],
      providers: [OprService],
    }).compile();

    controller = module.get<OprController>(OprController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
