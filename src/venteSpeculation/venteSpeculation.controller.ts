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
import { CreateVenteSpeculationDto } from './dto/create-venteSpeculation.dto';
import { UpdateVenteSpeculationDto } from './dto/update-venteSpeculation.dto';
import { VenteSpeculationService } from './venteSpeculation.service';

@Controller('venteSpeculation')
@ApiTags('VenteSpeculation')
@ApiBearerAuth()
export class VenteSpeculationController {
  constructor(
    private readonly venteSpeculationService: VenteSpeculationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createVenteSpeculationDto: CreateVenteSpeculationDto) {
    return this.venteSpeculationService.create(createVenteSpeculationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.venteSpeculationService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.venteSpeculationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenteSpeculationDto: UpdateVenteSpeculationDto,
  ) {
    return this.venteSpeculationService.update(+id, updateVenteSpeculationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venteSpeculationService.remove(+id);
  }
}
