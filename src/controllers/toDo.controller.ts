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
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoModel } from 'src/models/toDo.model';
import { ToDoSchema } from 'src/schema/toDo.Schema';
import { Repository } from 'typeorm';

@Controller('/todo')
export class ToDoController {
  constructor(
    @InjectRepository(ToDoModel) private model: Repository<ToDoModel>,
  ) {}

  @Post()
  public async create(@Body() body: ToDoSchema): Promise<ToDoModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number): Promise<ToDoModel> {
    const ToDo = await this.model.findOne({ where: { id } });

    if (!ToDo) {
      throw new NotFoundException(`Tarefa com o ${id} não encontrada.`);
    }
    return ToDo;
  }

  @Get()
  public async getAll(): Promise<ToDoModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ToDoSchema,
  ): Promise<ToDoModel> {
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
  ): Promise<ToDoModel> {
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
