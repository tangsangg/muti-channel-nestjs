import { ChannelEntity } from "./channel.entity";

export interface ChannelRo {
  channelId:ChannelEntity
}

export interface ChannelListRo {
    list:ChannelEntity[],
    listCount:number
}