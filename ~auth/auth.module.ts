import { Module } from '@nestjs/common';
import { CoreModule } from '~core';
import { PrismaModule } from '~prisma';
import { SecurityCodeModule } from '~security-code/security-code.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [CoreModule, PrismaModule, SecurityCodeModule],
  providers: [AuthGuard, AuthService],
  exports: [AuthService],
})
export class AuthModule {}