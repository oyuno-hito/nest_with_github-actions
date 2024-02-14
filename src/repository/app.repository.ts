import { Injectable, Module } from '@nestjs/common';

@Injectable()
export class AppRepository {
  findByUserName(userName?: string): string | null {
    return userName;
  }
}

@Module({
  providers: [AppRepository],
  exports: [AppRepository],
})
export class AppRepositoryModule {}
