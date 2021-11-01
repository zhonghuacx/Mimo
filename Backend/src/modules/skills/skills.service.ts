import { Injectable, Inject } from '@nestjs/common';
import { Skills_REPOSITORY } from 'src/core/constants';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @Inject(Skills_REPOSITORY)
    private readonly skillRepository: typeof Skill,
  ) {}

  async create(skill): Promise<Skill> {
    return await this.skillRepository.create<Skill>(skill);
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillRepository.findAll<Skill>();
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
