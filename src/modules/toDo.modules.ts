import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaController } from 'src/controllers/toDo.controller';
import { TarefaModel } from 'src/models/toDo.model';

@Module({
  imports: [TypeOrmModule.forFeature([TarefaModel])],
  controllers: [TarefaController],
})
export class TarefaModule {}
