import { Injectable, Inject } from '@nestjs/common';
import { UNIVERSITIES_REPOSITORY } from 'src/core/constants';
import { CreateUniversiteDto } from './dto/create-universite.dto';
import { UpdateUniversiteDto } from './dto/update-universite.dto';
import { University } from './entities/universite.entity';

@Injectable()
export class UniversitesService {
  constructor(
    @Inject(UNIVERSITIES_REPOSITORY)
    private readonly universityRepository: typeof University,
  ) { }

  async create(University): Promise<University> {
    return await this.universityRepository.create<University>(University);
  }

  async findAll(): Promise<University[]> {
    return await this.universityRepository.findAll<University>();
  }

  findOne(id: number) {
    return `This action returns a #${id} universite`;
  }

  update(id: number, updateUniversiteDto: UpdateUniversiteDto) {
    return `This action updates a #${id} universite`;
  }

  remove(id: number) {
    return `This action removes a #${id} universite`;
  }
}
