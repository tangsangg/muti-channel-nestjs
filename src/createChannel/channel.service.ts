import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {createChannelDto} from './dto/create-channel.dto'
import { ChannelEntiy } from "./channel.entity";


@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(ChannelEntiy)
    private readonly channelRepository:Repository<ChannelEntiy>
  ) {}
  async creatChannel(dto:createChannelDto):Promise<ChannelEntiy>{

    let channel = new ChannelEntiy()
    const {name}  = dto
    channel.name = name
    const newChannel = await this.channelRepository.save(channel)
    return newChannel
  }
}