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
import { CommercialisationService } from './commercialisation.service';
import { CreateCommercialisationDto } from './dto/create-commercialisation.dto';
import { UpdateCommercialisationDto } from './dto/update-commercialisation.dto';

@Controller('commercialisation')
@ApiTags('Commercialisation')
@ApiBearerAuth()
export class CommercialisationController {
  constructor(
    private readonly commercialisationService: CommercialisationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createCommercialisationDto: CreateCommercialisationDto) {
    return this.commercialisationService.create(createCommercialisationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.commercialisationService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.commercialisationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommercialisationDto: UpdateCommercialisationDto,
  ) {
    return this.commercialisationService.update(
      +id,
      updateCommercialisationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commercialisationService.remove(+id);
  }
}
