import {Controller,Body,Post} from '@nestjs/common'
import { MessageService } from './message.service'
import {createMessageDto} from './dto/cteate-message.dto'
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
export class MessageController{
   constructor (
      private readonly messageService:MessageService
   ){}
  @ApiOperation({summary:'create message'})
  @ApiResponse({status:200,description:'For create message'})
  @ApiBody({type:createMessageDto})
  @Post('/message')
  async create(@Body() createDto:createMessageDto){
      return await this.messageService.createMessage(createDto)
  }
}