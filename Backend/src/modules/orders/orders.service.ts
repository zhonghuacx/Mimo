import { Injectable, Inject } from '@nestjs/common';
import { ORDERS_REPOSITORY } from 'src/core/constants';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDERS_REPOSITORY)
    private readonly activityRepository: typeof Order,
  ) {}

  async create(Order): Promise<Order> {
    return await this.activityRepository.create<Order>(Order);
  }

  async findAll(): Promise<Order[]> {
    return await this.activityRepository.findAll<Order>();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
