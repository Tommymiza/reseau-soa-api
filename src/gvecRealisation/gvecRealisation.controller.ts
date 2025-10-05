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
import { CreateGvecRealisationDto } from './dto/create-gvecRealisation.dto';
import { UpdateGvecRealisationDto } from './dto/update-gvecRealisation.dto';
import { GvecRealisationService } from './gvecRealisation.service';

@Controller('gvecRealisation')
@ApiTags('GVECRealisation')
@ApiBearerAuth()
export class GvecRealisationController {
  constructor(
    private readonly gvecRealisationService: GvecRealisationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createGvecRealisationDto: CreateGvecRealisationDto) {
    return this.gvecRealisationService.create(createGvecRealisationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.gvecRealisationService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.gvecRealisationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGvecRealisationDto: UpdateGvecRealisationDto,
  ) {
    return this.gvecRealisationService.update(+id, updateGvecRealisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gvecRealisationService.remove(+id);
  }
}
