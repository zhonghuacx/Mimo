import { Connections } from './entities/connection.entity';
import { CONNECTIONS_REPOSITORY } from '../../core/constants';

export const ConnectionsProviders = [
  {
    provide: CONNECTIONS_REPOSITORY,
    useValue: Connections,
  },
];
