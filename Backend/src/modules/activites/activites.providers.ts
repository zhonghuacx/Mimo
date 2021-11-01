import { Activite } from './entities/activite.entity';
import { ACTIVITY_REPOSITORY } from '../../core/constants';

export const ActivitesProviders = [
  {
    provide: ACTIVITY_REPOSITORY,
    useValue: Activite,
  },
];
