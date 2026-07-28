
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
@Post('login')
login(
  @Body()
  body: {
    email: string;
    password: string;
  },
) {
  console.log('Request received:', body);

  const result = this.authService.login(body.email, body.password);

  console.log('Response returning:', result);

  return result;
}
}