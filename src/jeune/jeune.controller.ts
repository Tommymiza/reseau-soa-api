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
import { CreateJeuneDto } from './dto/create-jeune.dto';
import { UpdateJeuneDto } from './dto/update-jeune.dto';
import { JeuneService } from './jeune.service';

@Controller('jeune')
@ApiTags('Jeune')
@ApiBearerAuth()
export class JeuneController {
  constructor(
    private readonly jeuneService: JeuneService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createJeuneDto: CreateJeuneDto) {
    return this.jeuneService.create(createJeuneDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.jeuneService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.jeuneService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJeuneDto: UpdateJeuneDto) {
    return this.jeuneService.update(+id, updateJeuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jeuneService.remove(+id);
  }
}
