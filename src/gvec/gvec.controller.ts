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
import { CreateGvecDto } from './dto/create-gvec.dto';
import { UpdateGvecDto } from './dto/update-gvec.dto';
import { GvecService } from './gvec.service';

@Controller('gvec')
@ApiTags('GVEC')
@ApiBearerAuth()
export class GvecController {
  constructor(
    private readonly gvecService: GvecService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createGvecDto: CreateGvecDto) {
    return this.gvecService.create(createGvecDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.gvecService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.gvecService.findOne(+id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGvecDto: UpdateGvecDto) {
    return this.gvecService.update(+id, updateGvecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gvecService.remove(+id);
  }
}
