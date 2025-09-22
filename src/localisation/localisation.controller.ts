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
import { CreateLocalisationDto } from './dto/create-localisation.dto';
import { UpdateLocalisationDto } from './dto/update-localisation.dto';
import { LocalisationService } from './localisation.service';

@Controller('localisation')
@ApiTags('Localisation')
@ApiBearerAuth()
export class LocalisationController {
  constructor(
    private readonly localisationService: LocalisationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createLocalisationDto: CreateLocalisationDto) {
    return this.localisationService.create(createLocalisationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.localisationService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.localisationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocalisationDto: UpdateLocalisationDto,
  ) {
    return this.localisationService.update(+id, updateLocalisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localisationService.remove(+id);
  }
}
