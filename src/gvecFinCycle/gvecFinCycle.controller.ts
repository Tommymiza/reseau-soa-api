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
import { CreateGvecFinCycleDto } from './dto/create-gvecFinCycle.dto';
import { UpdateGvecFinCycleDto } from './dto/update-gvecFinCycle.dto';
import { GvecFinCycleService } from './gvecFinCycle.service';

@Controller('gvecFinCycle')
@ApiTags('GVECFinCycle')
@ApiBearerAuth()
export class GvecFinCycleController {
  constructor(
    private readonly gvecFinCycleService: GvecFinCycleService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createGvecFinCycleDto: CreateGvecFinCycleDto) {
    return this.gvecFinCycleService.create(createGvecFinCycleDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.gvecFinCycleService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.gvecFinCycleService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGvecFinCycleDto: UpdateGvecFinCycleDto,
  ) {
    return this.gvecFinCycleService.update(+id, updateGvecFinCycleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gvecFinCycleService.remove(+id);
  }
}
