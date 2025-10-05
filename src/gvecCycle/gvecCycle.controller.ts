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
import { CreateGvecCycleDto } from './dto/create-gvecCycle.dto';
import { UpdateGvecCycleDto } from './dto/update-gvecCycle.dto';
import { GvecCycleService } from './gvecCycle.service';

@Controller('gvecCycle')
@ApiTags('GVECCycle')
@ApiBearerAuth()
export class GvecCycleController {
  constructor(
    private readonly gvecCycleService: GvecCycleService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createGvecCycleDto: CreateGvecCycleDto) {
    return this.gvecCycleService.create(createGvecCycleDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.gvecCycleService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.gvecCycleService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGvecCycleDto: UpdateGvecCycleDto,
  ) {
    return this.gvecCycleService.update(+id, updateGvecCycleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gvecCycleService.remove(+id);
  }
}
