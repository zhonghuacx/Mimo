import { Module } from '@nestjs/common';
import { ActivitesService } from './activites.service';
import { ActivitesController } from './activites.controller';
import { ActivitesProviders } from './activites.providers';

@Module({
  controllers: [ActivitesController],
  providers: [ActivitesService, ...ActivitesProviders],
})
export class ActivitesModule {}
