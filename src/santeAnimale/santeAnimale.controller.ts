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
import { CreateSanteAnimaleDto } from './dto/create-santeAnimale.dto';
import { UpdateSanteAnimaleDto } from './dto/update-santeAnimale.dto';
import { SanteAnimaleService } from './santeAnimale.service';

@Controller('sante-animale')
@ApiTags('SanteAnimale')
@ApiBearerAuth()
export class SanteAnimaleController {
  constructor(
    private readonly santeAnimaleService: SanteAnimaleService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createSanteAnimaleDto: CreateSanteAnimaleDto) {
    return this.santeAnimaleService.create(createSanteAnimaleDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.santeAnimaleService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.santeAnimaleService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSanteAnimaleDto: UpdateSanteAnimaleDto,
  ) {
    return this.santeAnimaleService.update(+id, updateSanteAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.santeAnimaleService.remove(+id);
  }
}
