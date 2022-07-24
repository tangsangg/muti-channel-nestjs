import { Module } from "@nestjs/common";
import { MessageController } from "./message.controller";
import { MessageService } from "./message.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageEntity } from "./message.entity";
import { ChannelModule } from "../createChannel/channel.module";
import { ChannelEntity } from "../createChannel/channel.entity";

@Module({
  imports:[TypeOrmModule.forFeature([MessageEntity,ChannelEntity]),ChannelModule],
  providers:[MessageService],
  controllers:[
    MessageController
  ],
})
export class  MessageModule {}
