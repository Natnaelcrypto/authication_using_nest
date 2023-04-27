import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        'kjbvlrelfvlkn.cv,nskjkgkjckj;flja;kdxjm;lkdj;lcfjdia;LDFJIJ',
    });
  }
  async validate(payload: any) {
    return { payload };
  }
}
