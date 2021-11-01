import { Test, TestingModule } from '@nestjs/testing';
import { UniversitesService } from './universites.service';

describe('UniversitesService', () => {
  let service: UniversitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversitesService],
    }).compile();

    service = module.get<UniversitesService>(UniversitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
