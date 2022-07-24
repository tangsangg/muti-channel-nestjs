import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Connection, getRepository, Repository} from "typeorm"
import {createChannelDto} from './dto/create-channel.dto'
import { ChannelEntity } from "./channel.entity";


@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(ChannelEntity)
    private readonly channelRepository:Repository<ChannelEntity>
  ) {}
  async creatChannel(dto:createChannelDto):Promise<ChannelEntity>{

    let channel = new ChannelEntity()
    const {name}  = dto
    channel.name = name
    const newChannel = await this.channelRepository.save(channel)
    return newChannel
  }
  async findAll(query):Promise<any>{
    const list = await this.channelRepository.find({relations:['messages'],order:{
      'name':'DESC'
    }})

    return {list}
  }
}