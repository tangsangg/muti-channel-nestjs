import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'
import { ChannelEntity } from '../createChannel/channel.entity';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({default: ''})
  title:string

  @Column({default: ''})
  content:string

  @Column({default: ''})
  channel:string

  @Column({type:'timestamp',default:()=>"CURRENT_TIMESTAMP"})
  createdAt:Date

  @ManyToOne(type => ChannelEntity , list=> list.messages) 
  message:ChannelEntity
}