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
import { AccompagnementProdService } from './accompagnementProd.service';
import { CreateAccompagnementProdDto } from './dto/create-accompagnementProd.dto';
import { UpdateAccompagnementProdDto } from './dto/update-accompagnementProd.dto';

@Controller('accompagnementProd')
@ApiTags('AccompagnementProd')
@ApiBearerAuth()
export class AccompagnementProdController {
  constructor(
    private readonly accompagnementProdService: AccompagnementProdService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createAccompagnementProdDto: CreateAccompagnementProdDto) {
    return this.accompagnementProdService.create(createAccompagnementProdDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.accompagnementProdService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.accompagnementProdService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccompagnementProdDto: UpdateAccompagnementProdDto,
  ) {
    return this.accompagnementProdService.update(
      +id,
      updateAccompagnementProdDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accompagnementProdService.remove(+id);
  }
}
