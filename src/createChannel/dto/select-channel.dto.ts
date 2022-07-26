import {IsNotEmpty,IsNumber,IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import { Type } from 'class-transformer';

export class selectChannelDto {
  @ApiProperty(
    {
      description: 'Select channel',
      type: String
    }
  )
  @IsNotEmpty()
  readonly channelId:number;
  readonly type?:string;
  @IsNumber()
  @Type(()=>Number)
  @IsOptional()
  p=1;

  @IsNumber()
  @Type(()=>Number)
  @IsOptional()
  pagesize=10;
  
}