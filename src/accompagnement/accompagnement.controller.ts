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
import { AccompagnementOprService } from './accompagnement.service';
import { CreateAccompagnementOprDto } from './dto/create-accompagnement.dto';
import { UpdateAccompagnementOprDto } from './dto/update-accompagnement.dto';

@Controller('accompagnement')
@ApiTags('AccompagnementOpr')
@ApiBearerAuth()
export class AccompagnementOprController {
  constructor(
    private readonly accompagnementService: AccompagnementOprService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createAccompagnementOprDto: CreateAccompagnementOprDto) {
    return this.accompagnementService.create(createAccompagnementOprDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.accompagnementService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.accompagnementService.findOne(
      +id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccompagnementOprDto: UpdateAccompagnementOprDto,
  ) {
    return this.accompagnementService.update(+id, updateAccompagnementOprDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accompagnementService.remove(+id);
  }
}
