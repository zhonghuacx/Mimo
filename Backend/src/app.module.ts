import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { OffersModule } from './modules/offers/offers.module';
import { ChatModule } from './modules/chat/chat.module';
import { OrdersModule } from './modules/orders/orders.module';
import { UserActivitesModule } from './modules/user-activites/user-activites.module';
import { UserJobInterestModule } from './modules/user-job-interest/user-job-interest.module';
import { ActivitesModule } from './modules/activites/activites.module';
import { StripeModule } from 'nestjs-stripe';
import { SkillsModule } from './modules/skills/skills.module';
import { LikesModule } from './modules/likes/likes.module';
import { ConnectionsModule } from './modules/connections/connections.module';
import { UniversitesModule } from './modules/universites/universites.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    StripeModule.forRoot({
      apiKey: process.env.STRIPE_SECRET_KEY,
      apiVersion: '2020-08-27',
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PostsModule,
    JobsModule,
    UserActivitesModule,
    UserJobInterestModule,
    ActivitesModule,
    OrdersModule,
    OffersModule,
    ChatModule,
    SkillsModule,
    LikesModule,
    ConnectionsModule,
    UniversitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
