import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class createMessageDto {
  @ApiProperty(
    {
      description: 'The title of message',
      type: String
    }
  )
  @IsNotEmpty()
  readonly title:string;

  @ApiProperty(
    {
      description: 'The content of message',
      type: String
    }
  )
  @IsNotEmpty()
  readonly content:string;


  @ApiProperty(
    {
      description: 'The channel of message',
      type: String
    }
  )
  @IsNotEmpty()
  readonly channel:string;
}