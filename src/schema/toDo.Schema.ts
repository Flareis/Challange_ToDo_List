import { IsString } from "class-validator";

export class ToDoSchema {
  @IsString()
  tarefa: string;

  @IsString()
  categoria: string;

  @IsString()
  status: string;

  @IsString()
  previsao: Date;

  @IsString()
  solicitante: string;
}
