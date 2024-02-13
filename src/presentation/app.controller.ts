import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('user_name') userName?: string): string {
    return this.appService.getHello(userName);
  }
}
