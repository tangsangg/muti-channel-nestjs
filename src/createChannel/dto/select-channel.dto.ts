import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class selectChannelDto {
  @ApiProperty(
    {
      description: 'Select channel',
      type: String
    }
  )
  @IsNotEmpty()
  readonly channelId:number;
  readonly limit?:number;
  readonly offset?:number
  readonly p?:number;
  readonly pageSize?:number;
  readonly type?:string
}