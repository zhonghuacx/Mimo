import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { UsersService } from '../users/users.service';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    @InjectTwilio() private readonly twilioClient: TwilioClient,
    @InjectStripe() private readonly stripeClient: Stripe,
  ) {}

  async validateUser(phone: string) {
    // find if user exist with this Phone
    const user = await this.userService.findOneByPhone(phone);
    if (!user) {
      return null;
    }
    const { ...result } = user['dataValues'];
    return await this.login(result);
  }

  public async login(user) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async create(user) {
    // create the user
    const newUser = await this.userService.create(user);
    // tslint:disable-next-line: no-string-literal
    const { ...result } = newUser['dataValues'];
    // generate token
    const token = await this.generateToken(result);
    // return the user and the token
    return { user: result, token };
  }

  public async otpSend(countryCode, phone) {
    try {
      const verificationResponse = await this.twilioClient.verify
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verifications.create({
          to: `+${countryCode}${phone}`,
          channel: 'sms',
          locale: 'en',
        });
      return verificationResponse;
    } catch (error) {
      return error;
    }
  }

  public async otpConfirm(code, verificationSid) {
    try {
      const verificationResponse = await this.twilioClient.verify
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verificationChecks.create({
          code: code,
          verificationSid: verificationSid,
        });
      return verificationResponse;
    } catch (error) {
      return error;
    }
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  // private async checkout(){
  //   this.stripeClient.
  // }
}
