import { Module } from "@nestjs/common";
import { ChannelController } from "./channel.controller";
import { ChannelService } from "./channel.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelEntiy } from "./channel.entity";

@Module({
  imports:[TypeOrmModule.forFeature([ChannelEntiy])],
  providers:[ChannelService],
  controllers:[
    ChannelController
  ]
})
export class  ChannelModule {}
