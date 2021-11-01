import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersProviders } from './orders.providers';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ...OrdersProviders],
})
export class OrdersModule {}
