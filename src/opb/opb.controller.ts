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
import { CreateOpbDto } from './dto/create-opb.dto';
import { UpdateOpbDto } from './dto/update-opb.dto';
import { OpbService } from './opb.service';

@Controller('opb')
@ApiTags('Opb')
@ApiBearerAuth()
export class OpbController {
  constructor(
    private readonly opbService: OpbService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createOpbDto: CreateOpbDto) {
    return this.opbService.create(createOpbDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.opbService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.opbService.findOne(+id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpbDto: UpdateOpbDto) {
    return this.opbService.update(+id, updateOpbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opbService.remove(+id);
  }
}
