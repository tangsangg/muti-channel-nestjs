import {Controller,Body,Post,Get, Query} from '@nestjs/common'
import { ChannelService } from './channel.service'
import {createChannelDto} from './dto/create-channel.dto'
import {selectChannelDto} from './dto/select-channel.dto'
import {ChannelListRo} from '../createChannel/channel.interface'
import  {
   ApiBearerAuth,
   ApiTags,
   ApiResponse,
   ApiOperation,
   ApiBody,
   ApiQuery
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
  @ApiOperation({summary:'select list from Channel'})
  @ApiResponse({status:200,description:'For select channel'})
  @ApiQuery({type:selectChannelDto})
  @Get('/list')
  async findAll(@Query() query):Promise<ChannelListRo>{
    return await this.channelService.findAll(query)
  }
}