import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  findByUserName(userName?: string): string | null {
    return userName;
  }
}
