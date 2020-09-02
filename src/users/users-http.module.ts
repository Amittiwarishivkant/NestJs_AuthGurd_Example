import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  // controllers: [UsersController]
})
export class UserHttpModule {}
