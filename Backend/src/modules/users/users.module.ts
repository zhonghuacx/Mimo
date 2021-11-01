import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { OffersService } from '../offers/offers.service';
import { OffersProviders } from '../offers/offers.providers';

@Module({
  providers: [
    UsersService,
    OffersService,
    ...usersProviders,
    ...OffersProviders,
  ],
  controllers: [UsersController],

  exports: [UsersService],
})
export class UsersModule {}
