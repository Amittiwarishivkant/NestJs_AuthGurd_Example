import { Controller, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/auth/logging.interceptor';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UsersController {}
