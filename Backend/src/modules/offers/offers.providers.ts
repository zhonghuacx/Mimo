import { Offer } from './entities/offer.entity';
import { OFFERS_REPOSITORY } from '../../core/constants';

export const OffersProviders = [
  {
    provide: OFFERS_REPOSITORY,
    useValue: Offer,
  },
];
