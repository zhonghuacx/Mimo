import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SkillsProviders } from './skills.providers';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService, ...SkillsProviders],
})
export class SkillsModule {}
