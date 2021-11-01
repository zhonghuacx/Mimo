import { UNIVERSITIES_REPOSITORY } from '../../core/constants';
import { University } from './entities/universite.entity';

export const UniversitesProviders = [
  {
    provide: UNIVERSITIES_REPOSITORY,
    useValue: University,
  },
];
