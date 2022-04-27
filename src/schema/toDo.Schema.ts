import { IsString } from 'class-validator';

export class TarefaSchema {
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
