import { Test, TestingModule } from '@nestjs/testing';
import { RepresentationController } from './representation.controller';
import { RepresentationService } from './representation.service';

describe('RepresentationController', () => {
  let controller: RepresentationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepresentationController],
      providers: [RepresentationService],
    }).compile();

    controller = module.get<RepresentationController>(RepresentationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
