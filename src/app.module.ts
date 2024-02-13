import { Module } from '@nestjs/common';
import { AppController } from './presentation/app.controller';
import { AppService } from './service/app.service';
import { AppRepository } from './repository/app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
