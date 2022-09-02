import ExampleUsecase from '../src/usecases/ExampleUsecase.js';
import FileService from '../src/services/ExampleService.js';
import ExampleRepository from '../src/repositories/ExampleRepository.js';
import prisma from '../libs/prisma/prisma.js';

const usecase = new ExampleUsecase({});

test('Example index', async () => {
  expect(
    await usecase.index({
      exampleService: new FileService(),
      exampleRepository: new ExampleRepository({ prisma })
    })
  ).toEqual({ text: 'index' });
});

test('Example create', async () => {
  expect(await usecase.create()).toEqual({ text: 'create' });
});

test('Example read', async () => {
  expect(await usecase.read()).toEqual({ text: 'read' });
});

test('Example update', async () => {
  expect(await usecase.update()).toEqual({ text: 'update' });
});

test('Example delete', async () => {
  expect(await usecase.delete()).toEqual({ text: 'delete' });
});

test('Example print', async () => {
  expect(await usecase.print('exampleFile.txt')).toEqual({ text: 'delete' });
});
