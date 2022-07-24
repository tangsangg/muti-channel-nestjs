import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {createMessageDto} from './dto/cteate-message.dto'
import { MessageEntity } from "./message.entity";
import { ChannelEntity } from "../createChannel/channel.entity";
import { ChannelRo } from "../createChannel/channel.interface";


@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(ChannelEntity)
    private readonly channelRepository:Repository<ChannelEntity>,

    @InjectRepository(MessageEntity)
    private readonly messageRepository:Repository<MessageEntity>

  ) {}
  async findOne(where):Promise<ChannelRo>{
    const channelId = await this.channelRepository.findOne(where)
    return {channelId}
  }
  async createMessage(dto:createMessageDto):Promise<MessageEntity>{
    let message = new MessageEntity()
    const {title,content,channel}  = dto
    message.title = title
    message.content = content
    message.channel = channel
    const newMessage = await this.messageRepository.save(message)
    const Channel= await this.channelRepository.findOne({where:{id:channel},relations:['messages']})
    Channel.messages.push(message)
    await this.channelRepository.save(Channel)
    return newMessage
  }
}