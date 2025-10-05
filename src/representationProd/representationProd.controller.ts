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
import { CreateRepresentationProdDto } from './dto/create-representationProd.dto';
import { UpdateRepresentationProdDto } from './dto/update-representationProd.dto';
import { RepresentationProdService } from './representationProd.service';

@Controller('representation-prod')
@ApiTags('RepresentationProd')
@ApiBearerAuth()
export class RepresentationProdController {
  constructor(
    private readonly representationProdService: RepresentationProdService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createRepresentationProdDto: CreateRepresentationProdDto) {
    return this.representationProdService.create(createRepresentationProdDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.representationProdService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.representationProdService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRepresentationProdDto: UpdateRepresentationProdDto,
  ) {
    return this.representationProdService.update(
      +id,
      updateRepresentationProdDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.representationProdService.remove(+id);
  }
}
