import { Job } from './entities/job.entity';
import { JOB_REPOSITORY } from '../../core/constants';

export const jobsProviders = [
  {
    provide: JOB_REPOSITORY,
    useValue: Job,
  },
];
