import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository,getRepository} from "typeorm"
import {createChannelDto} from './dto/create-channel.dto'
import {selectChannelDto} from './dto/select-channel.dto'
import { ChannelListRo } from "./channel.interface";
import { ChannelEntity } from "./channel.entity";
import { MessageEntity } from "../createMessage/message.entity";


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
  async findAll(query:selectChannelDto):Promise<any>{
    const qb = await getRepository(MessageEntity)
    .createQueryBuilder('user')
    .take(query.pagesize)
    .skip((query.p-1)*query.pagesize)
    const listCount = await qb.getCount()
    qb.orderBy('createdAt','DESC')
    const list =await qb.getMany()
    return {list,listCount}
  }
}