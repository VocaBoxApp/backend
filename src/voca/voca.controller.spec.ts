import { Test, TestingModule } from '@nestjs/testing';
import { VocaController } from './voca.controller';

describe('VocaController', () => {
  let controller: VocaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VocaController],
    }).compile();

    controller = module.get<VocaController>(VocaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
