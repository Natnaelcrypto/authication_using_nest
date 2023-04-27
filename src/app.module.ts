import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mobile'),
    JwtModule.register({
      secret: 'kjbvlrelfvlkn.cv,nskjkgkjckj;flja;kdxjm;lkdj;lcfjdia;LDFJIJ',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
