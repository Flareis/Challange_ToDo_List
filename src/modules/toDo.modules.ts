import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoController } from 'src/controllers/toDo.controller';
import { ToDoModel } from 'src/models/toDo.model';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoModel])],
  controllers: [ToDoController],
})
export class ToDoModule {}
