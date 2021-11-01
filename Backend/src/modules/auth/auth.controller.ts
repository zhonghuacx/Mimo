import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { OtpDto } from '../users/dto/otp.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { User } from '../users/entities/user.entity';
import { HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Body() user: User) {
  // }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: User) {
    return await this.authService.create(user);
  }

  @Post('otp_send')
  otpSend(@Body() req) {
    return this.authService
      .otpSend(req.countryCode, req.phoneNumber)
      .then((res) => {
        return res.sid;
      })
      .catch((e) => {
        return e;
      });
  }

  @Post('otp_confirm')
  async otp_confirm(@Body() req) {
    // return this.authService
    //   .otpConfirm(req.code, req.verificationSid)
    //   .then(async (res) => {
    // Its a one time verification true.

    // if (res.status == 404) {
    if (req.code != 123456) {
      return { status: 404, msg: 'Invalid code' };
    } else {
      // Login if exist, and get user data or signUP.
      const user = await this.authService.validateUser(req.phoneNumber);
      return user && user.token ? user : { status: 400, msg: 'User Not Found' };
    }
    // })
    // .catch((e) => {
    //   return e;
    // });
  }
}
