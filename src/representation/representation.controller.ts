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
import { CreateRepresentationDto } from './dto/create-representation.dto';
import { UpdateRepresentationDto } from './dto/update-representation.dto';
import { RepresentationService } from './representation.service';

@Controller('representation')
@ApiTags('Representation')
@ApiBearerAuth()
export class RepresentationController {
  constructor(
    private readonly representationService: RepresentationService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createRepresentationDto: CreateRepresentationDto) {
    return this.representationService.create(createRepresentationDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.representationService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.representationService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRepresentationDto: UpdateRepresentationDto,
  ) {
    return this.representationService.update(+id, updateRepresentationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.representationService.remove(+id);
  }
}
