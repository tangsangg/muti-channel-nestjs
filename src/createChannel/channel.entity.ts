import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('channel')
export class ChannelEntiy {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({nullable: true})
  name:string
}