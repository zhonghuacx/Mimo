import { Test, TestingModule } from '@nestjs/testing';
import { UniversitesController } from './universites.controller';
import { UniversitesService } from './universites.service';

describe('UniversitesController', () => {
  let controller: UniversitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversitesController],
      providers: [UniversitesService],
    }).compile();

    controller = module.get<UniversitesController>(UniversitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
