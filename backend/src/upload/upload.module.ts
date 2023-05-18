import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';

@Module({
  imports: [
    AuthModule,
  ],
  controllers: [UploadController],
  providers: [UploadService, JwtService, JwtStrategy]
})
export class UploadModule {}
