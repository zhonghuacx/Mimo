import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { OffersProviders } from './offers.providers';

@Module({
  controllers: [OffersController],
  providers: [OffersService, ...OffersProviders],
})
export class OffersModule {}
