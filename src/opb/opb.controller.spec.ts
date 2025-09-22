import { Test, TestingModule } from '@nestjs/testing';
import { OpbController } from './opb.controller';
import { OpbService } from './opb.service';

describe('OpbController', () => {
  let controller: OpbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpbController],
      providers: [OpbService],
    }).compile();

    controller = module.get<OpbController>(OpbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
