
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === '1234') {
      return {
        message: 'Login successful',
        user: {
          email,
        },
      };
    }

    throw new UnauthorizedException('Invalid email or password');
  }
}