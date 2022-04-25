import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoModule } from './modules/toDo.modules';
import { UserModule } from './modules/user.module';

@Module({
  imports: [ToDoModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
