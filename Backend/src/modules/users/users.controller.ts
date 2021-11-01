import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { OffersService } from '../offers/offers.service';
import { UserSkill } from '../users/entities/user_skill.entity';
import { Offer } from '../offers/entities/offer.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEducation } from './entities/user_education.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly offersService: OffersService,
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('add_skill')
  async Skill(@Request() req, @Body() userSkill: UserSkill) {
    userSkill.user_id = req.user.id;
    return await this.usersService.addskill(userSkill);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add_offer')
  async Offer(@Request() req, @Body() offer: Offer) {
    offer.user_id = req.user.id;
    return await this.offersService.create(offer);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add_education')
  async Education(@Request() req, @Body() userEducation: UserEducation) {
    userEducation.user_id = req.user.id;
    return await this.usersService.add_education(userEducation);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getUser(@Request() req) {
    return this.usersService.findOneById(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('matching')
  matching(@Request() req) {
    return this.usersService.findMatching(req.user.id);
  }
}
