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
import { AchatArticleService } from './achatArticle.service';
import { CreateAchatArticleDto } from './dto/create-achatArticle.dto';
import { UpdateAchatArticleDto } from './dto/update-achatArticle.dto';

@Controller('achatArticle')
@ApiTags('AchatArticle')
@ApiBearerAuth()
export class AchatArticleController {
  constructor(
    private readonly achatArticleService: AchatArticleService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createAchatArticleDto: CreateAchatArticleDto) {
    return this.achatArticleService.create(createAchatArticleDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.achatArticleService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.achatArticleService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchatArticleDto: UpdateAchatArticleDto,
  ) {
    return this.achatArticleService.update(+id, updateAchatArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achatArticleService.remove(+id);
  }
}
