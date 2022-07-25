import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository,getRepository} from "typeorm"
import {createChannelDto} from './dto/create-channel.dto'
import {selectChannelDto} from './dto/select-channel.dto'
import { ChannelListRo } from "./channel.interface";
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
  async findAll(query:selectChannelDto):Promise<ChannelListRo>{
    const qb = await getRepository(ChannelEntity)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.messages','message')
    .where("user.id = :id",{id:query.channelId})
    if('limit' in query) {
      qb.limit(query.limit)
    }
    if('offset' in query) {
      qb.offset(query.offset)
    }
    const listCount = await qb.getCount()
    qb.orderBy('message.createdAt','DESC')
    const list =await qb.getMany()
    return {list,listCount}
  }
}