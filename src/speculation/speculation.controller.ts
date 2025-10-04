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
import { SpeculationService } from './speculation.service';
import { CreateSpeculationDto } from './dto/create-speculation.dto';
import { UpdateSpeculationDto } from './dto/update-speculation.dto';

@Controller('speculation')
@ApiTags('Speculation')
@ApiBearerAuth()
export class SpeculationController {
  constructor(
    private readonly speculationService: SpeculationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createSpeculationDto: CreateSpeculationDto) {
    return this.speculationService.create(createSpeculationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.speculationService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.speculationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpeculationDto: UpdateSpeculationDto,
  ) {
    return this.speculationService.update(+id, updateSpeculationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speculationService.remove(+id);
  }
}
