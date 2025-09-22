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
import { CreateProducteurDto } from './dto/create-producteur.dto';
import { UpdateProducteurDto } from './dto/update-producteur.dto';
import { ProducteurService } from './producteur.service';

@Controller('producteur')
@ApiTags('Producteur')
@ApiBearerAuth()
export class ProducteurController {
  constructor(
    private readonly producteurService: ProducteurService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createProducteurDto: CreateProducteurDto) {
    return this.producteurService.create(createProducteurDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.producteurService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.producteurService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducteurDto: UpdateProducteurDto,
  ) {
    return this.producteurService.update(+id, updateProducteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producteurService.remove(+id);
  }
}
