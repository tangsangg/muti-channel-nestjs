import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class createChannelDto {
  @ApiProperty(
    {
      description: 'The name of channel',
      type: String
    }
  )
  @IsNotEmpty()
  readonly name:string;
}