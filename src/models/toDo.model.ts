import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TarefaModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  tarefa: string;

  @Column()
  categoria: string;

  @Column()
  status: string;

  @Column()
  previsao: Date;

  @Column()
  solicitante: string;
}
