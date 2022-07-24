import {Controller,Body,Post} from '@nestjs/common'
import { ChannelService } from './channel.service'
import {createChannelDto} from './dto/create-channel.dto'
import  {
   ApiBearerAuth,
   ApiTags,
   ApiResponse,
   ApiOperation,
   ApiBody
} from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags()
@Controller()
export class ChannelController{
   constructor (
      private readonly channelService:ChannelService
   ){}
      @ApiOperation({summary:'create an unique Channel'})
      @ApiResponse({status:200,description:'For create channel'})
      @ApiBody({type:createChannelDto})
  @Post('/create')
  async create(@Body() createDto:createChannelDto){
      return await this.channelService.creatChannel(createDto)
  }
}