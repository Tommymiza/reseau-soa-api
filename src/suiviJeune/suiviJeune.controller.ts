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
import { CreateSuiviJeuneDto } from './dto/create-suiviJeune.dto';
import { UpdateSuiviJeuneDto } from './dto/update-suiviJeune.dto';
import { SuiviJeuneService } from './suiviJeune.service';

@Controller('suiviJeune')
@ApiTags('SuiviJeune')
@ApiBearerAuth()
export class SuiviJeuneController {
  constructor(
    private readonly suiviJeuneService: SuiviJeuneService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createSuiviJeuneDto: CreateSuiviJeuneDto) {
    return this.suiviJeuneService.create(createSuiviJeuneDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.suiviJeuneService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.suiviJeuneService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSuiviJeuneDto: UpdateSuiviJeuneDto,
  ) {
    return this.suiviJeuneService.update(+id, updateSuiviJeuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suiviJeuneService.remove(+id);
  }
}
