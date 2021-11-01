import { Injectable, Inject } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JOB_REPOSITORY } from '../../core/constants';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @Inject(JOB_REPOSITORY) private readonly jobRepository: typeof Job,
  ) {}

  async create(Job: Job): Promise<Job> {
    return await this.jobRepository.create<Job>(Job);
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.findAll<Job>();
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
