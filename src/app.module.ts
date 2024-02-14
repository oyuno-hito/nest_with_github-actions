import { Module } from '@nestjs/common';
import { AppController } from './presentation/app.controller';
import { AppService, AppServiceModule } from './service/app.service';
import { AppRepositoryModule } from './repository/app.repository';

@Module({
  imports: [AppServiceModule, AppRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
