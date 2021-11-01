import { Injectable, Inject } from '@nestjs/common';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { UpdateActiviteDto } from './dto/update-activite.dto';
import { ACTIVITY_REPOSITORY } from '../../core/constants';
import { Activite } from './entities/activite.entity';

@Injectable()
export class ActivitesService {
  constructor(
    @Inject(ACTIVITY_REPOSITORY)
    private readonly activityRepository: typeof Activite,
  ) {}

  async create(Activite): Promise<Activite> {
    return await this.activityRepository.create<Activite>(Activite);
  }

  async findAll(): Promise<Activite[]> {
    return await this.activityRepository.findAll<Activite>();
  }

  findOne(id: number) {
    return `This action returns a #${id} activite`;
  }

  update(id: number, updateActiviteDto: UpdateActiviteDto) {
    return `This action updates a #${id} activite`;
  }

  remove(id: number) {
    return `This action removes a #${id} activite`;
  }
}
