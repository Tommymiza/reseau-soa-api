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
import { CreateOprDto } from './dto/create-opr.dto';
import { UpdateOprDto } from './dto/update-opr.dto';
import { OprService } from './opr.service';

@Controller('opr')
@ApiTags('Opr')
@ApiBearerAuth()
export class OprController {
  constructor(
    private readonly oprService: OprService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createOprDto: CreateOprDto) {
    return this.oprService.create(createOprDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.oprService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.oprService.findOne(+id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOprDto: UpdateOprDto) {
    return this.oprService.update(+id, updateOprDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oprService.remove(+id);
  }
}
