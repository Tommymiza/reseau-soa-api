import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelperService } from 'src/helper/helper.service';
import { AchatService } from './achat.service';
import { CreateAchatDto } from './dto/create-achat.dto';
import { UpdateAchatDto } from './dto/update-achat.dto';

@Controller('achat')
@ApiTags('Achat')
@ApiBearerAuth()
export class AchatController {
  constructor(
    private readonly achatService: AchatService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createAchatDto: CreateAchatDto) {
    return this.achatService.create(createAchatDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.achatService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.achatService.findOne(+id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchatDto: UpdateAchatDto) {
    return this.achatService.update(+id, updateAchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achatService.remove(+id);
  }
}
