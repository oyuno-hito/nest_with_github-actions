import { Injectable, Module } from '@nestjs/common';
import { AppRepository } from 'src/repository/app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}
  getHello(userName: string): string {
    const name = this.appRepository.findByUserName(userName) ?? 'guest';
    return `Hello ${name}!`;
  }
}

@Module({
  imports: [AppRepository],
})
export class AppServiceModule {}
