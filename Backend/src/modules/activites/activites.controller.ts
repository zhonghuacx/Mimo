import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivitesService } from './activites.service';
import { CreateActiviteDto } from './dto/create-activite.dto';
import { UpdateActiviteDto } from './dto/update-activite.dto';
import { Activite } from './entities/activite.entity';

@Controller('activites')
export class ActivitesController {
  constructor(private readonly activitesService: ActivitesService) {}

  @Post()
  create(@Body() Activity: Activite) {
    return this.activitesService.create(Activity);
  }

  @Get()
  findAll() {
    return this.activitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActiviteDto: UpdateActiviteDto,
  ) {
    return this.activitesService.update(+id, updateActiviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitesService.remove(+id);
  }
}
