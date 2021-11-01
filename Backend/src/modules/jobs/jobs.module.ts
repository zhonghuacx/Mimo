import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsProviders } from './jobs.providers';

@Module({
  controllers: [JobsController],
  providers: [JobsService, ...jobsProviders],
})
export class JobsModule {}
