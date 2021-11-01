import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversitesService } from './universites.service';
import { UpdateUniversiteDto } from './dto/update-universite.dto';
import { University } from './entities/universite.entity';

@Controller('universites')
export class UniversitesController {
  constructor(private readonly universitesService: UniversitesService) { }

  @Post()
  create(@Body() university: University) {
    return this.universitesService.create(university);
  }

  @Get()
  findAll() {
    return this.universitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniversiteDto: UpdateUniversiteDto) {
    return this.universitesService.update(+id, updateUniversiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universitesService.remove(+id);
  }
}
