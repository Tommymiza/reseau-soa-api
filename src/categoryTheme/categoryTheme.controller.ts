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
import { CategoryThemeService } from './categoryTheme.service';
import { CreateCategoryThemeDto } from './dto/create-categoryTheme.dto';
import { UpdateCategoryThemeDto } from './dto/update-categoryTheme.dto';

@Controller('categoryTheme')
@ApiTags('CategoryTheme')
@ApiBearerAuth()
export class CategoryThemeController {
  constructor(
    private readonly categoryThemeService: CategoryThemeService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createCategoryThemeDto: CreateCategoryThemeDto) {
    return this.categoryThemeService.create(createCategoryThemeDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.categoryThemeService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.categoryThemeService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryThemeDto: UpdateCategoryThemeDto,
  ) {
    return this.categoryThemeService.update(+id, updateCategoryThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryThemeService.remove(+id);
  }
}
