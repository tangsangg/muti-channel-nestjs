import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ChannelModule}  from './createChannel/channel.module'
import { Connection } from 'typeorm';
import { ChannelEntiy } from './createChannel/channel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        "type":"mysql",
        "host":"localhost",
        "port":3306,
        "username":"root",
        "password":"root",
        "database":"nestjsforapi",
        "entities": [ChannelEntiy],
        "synchronize":true
      }
    ),
    ChannelModule
  ],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule {
  constructor (private readonly connection:Connection) {}
}
