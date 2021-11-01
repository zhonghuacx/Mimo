import { Module } from '@nestjs/common';
import { UniversitesService } from './universites.service';
import { UniversitesController } from './universites.controller';
import { UniversitesProviders } from './universites.providers';

@Module({
  controllers: [UniversitesController],
  providers: [UniversitesService, ...UniversitesProviders]
})
export class UniversitesModule { }
