import { Order } from './entities/order.entity';
import { ORDERS_REPOSITORY } from '../../core/constants';

export const OrdersProviders = [
  {
    provide: ORDERS_REPOSITORY,
    useValue: Order,
  },
];
