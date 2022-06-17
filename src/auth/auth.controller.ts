/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) { }

    @Post('login')
    login(@Body() dto: AuthDto) {
        return this.service.login(dto);
    }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.service.signup(dto);
    }
}
