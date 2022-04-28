import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  ParseIntPipe,
  Delete,
  Patch,
  Headers,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { TarefaModel } from 'src/models/toDo.model';
import { TarefaSchema } from 'src/schema/toDo.Schema';
import { Repository } from 'typeorm';

@Controller('/tarefa')
export class TarefaController {
  constructor(
    @InjectRepository(TarefaModel) private model: Repository<TarefaModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: TarefaSchema,
    //@Headers('Authorization') authorization: string,
  ): Promise<TarefaModel> {
    //console.log(authorization);
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number): Promise<TarefaModel> {
    const ToDo = await this.model.findOne({ where: { id } });

    if (!ToDo) {
      throw new NotFoundException(`Tarefa com o id: ${id} não encontrada.`);
    }
    return ToDo;
  }

  @Get()
  public async getAll(): Promise<TarefaModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: TarefaSchema,
  ): Promise<TarefaModel> {
    const ToDo = await this.model.findOne({ where: { id } });
    if (!ToDo) {
      throw new NotFoundException(`Tarefa com o id: ${id} não encontrada.`);
    }

    await this.model.update({ id }, body);
    return this.model.findOne({ where: { id } });
  }

  @Patch(':id')
  public async patch(
    @Param('id') id: number,
    @Body() body,
  ): Promise<TarefaModel> {
    const ToDo = await this.model.findOne({ where: { id } });
    if (!ToDo) {
      throw new NotFoundException(`Tarefa com o id: ${id} não encontrada.`);
    }

    await this.model.update({ id }, body);
    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const ToDo = await this.model.findOne({ where: { id } });
    if (!ToDo) {
      throw new NotFoundException(`Tarefa com o id: ${id} não encontrada.`);
    }
    await this.model.delete(id);

    return `Tarefa com o id: ${id} deletada com sucesso.`;
  }
}
