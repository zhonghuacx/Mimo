import { Like } from './entities/like.entity';
import { LIKES_REPOSITORY } from '../../core/constants';

export const LikesProviders = [
  {
    provide: LIKES_REPOSITORY,
    useValue: Like,
  },
];
