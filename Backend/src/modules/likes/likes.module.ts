import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { LikesProviders } from './lkes.providers';

@Module({
  controllers: [LikesController],
  providers: [LikesService, ...LikesProviders
  ]
})
export class LikesModule { }
