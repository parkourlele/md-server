import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Injectable()
// OnModuleInit 和 OnModuleDestroy 是 NestJS 的生命周期钩子
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // 在应用启动时连接数据库
  async onModuleInit() {
    await this.$connect();
  }
  // 在应用关闭时关闭数据库连接
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
