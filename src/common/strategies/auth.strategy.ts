import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthUserStrategy extends PassportStrategy(JwtStrategy, "auth:user") {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("SESSION_SECRET") || "a_secret_with_minimum_length_of_32_characters",
      ignoreExpiration: false,
    });
  }

  async validate(payload: { email: string }, done: VerifiedCallback): Promise<any> {
    return done(null, payload);
  }
}
