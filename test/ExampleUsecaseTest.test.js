import ExampleUsecase from '../src/usecases/ExampleUsecase.js';
import FileService from '../src/services/FileService.js';
import ExampleRepository from '../src/repositories/ExampleRepository.js';
import prisma from '../libs/prisma/prisma.js';
import fs from 'fs';

const usecase = new ExampleUsecase({ path: 'exampleFile.txt' });

test('Example index', async () => {
  expect(
    await usecase.index({
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
  const file = await usecase.print({
    fileService: new FileService({ documentsPath: process.env.DOCUMENTS_PATH })
  });

  expect(file).toEqual({
    contentType: 'text/plain',
    filename: 'exampleFile.txt',
    file: fs.readFileSync('documents/exampleFile.txt')
  });
});
