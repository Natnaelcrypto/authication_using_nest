import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'kjbvlrelfvlkn.cv,nskjkgkjckj;flja;kdxjm;lkdj;lcfjdia;LDFJIJ',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtModule, JwtStrategy],
})
export class AuthModule {}
