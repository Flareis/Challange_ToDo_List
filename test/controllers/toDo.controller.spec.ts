import { Request } from 'express';
import { TarefaController } from 'src/controllers/toDo.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { Body, InternalServerErrorException } from '@nestjs/common';
import { TarefaSchema } from 'src/schema/toDo.Schema';

describe('TarefaController', () => {
  let tarefaController: TarefaController;
  let mockData;

  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarefaController],
    }).compile();

    tarefaController = module.get<TarefaController>(TarefaController);
  });

  it('should be defined', () => {
    expect(tarefaController).toBeDefined();
  });

  describe('create', () => {
    it('should return a body', async () => {
      (tarefaController.create);
    });
    expect(await tarefaController.create()).rejects.toThrow(
        new InternalServerErrorException(),
  });
});
