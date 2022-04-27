import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaModule } from './modules/toDo.modules';
import { UserModule } from './modules/user.module';

@Module({
  imports: [TarefaModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
