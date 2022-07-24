
import {Entity,PrimaryGeneratedColumn,Column,OneToMany,JoinColumn} from 'typeorm'
import { MessageEntity } from '../createMessage/message.entity';


@Entity('channel')
export class ChannelEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({nullable: true})
  name:string
  @Column({type:'timestamp',default:()=>"CURRENT_TIMESTAMP"})
  createdAt:Date
  
  @OneToMany(type => MessageEntity , message => message.message)
  @JoinColumn()
  messages:MessageEntity[]
}