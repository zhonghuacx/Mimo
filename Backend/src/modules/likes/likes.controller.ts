import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('add_like')
  async create(@Request() req, @Body() like: Like) {
    like.user_id = req.user.id;
    if (like.liked_id != like.user_id) {
      return await this.likesService.create(like);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    return this.likesService
      .findAll(req.user.id)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  remove(@Request() req, @Body() body: any) {
    return this.likesService.remove(body.id, req.user.id);
  }
}
