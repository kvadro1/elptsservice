import ExampleUsecase from '../usecases/ExampleUsecase.js';
import FileResponse from './responses/FileReponse.mjs';

export default [
  { url: '/example', method: 'get', usecase: ExampleUsecase, handler: 'index' },
  { url: '/example', method: 'post', usecase: ExampleUsecase, handler: 'create' },
  { url: '/example/:id', method: 'get', usecase: ExampleUsecase, handler: 'read' },
  { url: '/example/:id', method: 'put', usecase: ExampleUsecase, handler: 'update' },
  { url: '/example/:id', method: 'delete', usecase: ExampleUsecase, handler: 'delete' },
  { url: '/example/:id/print', method: 'get', usecase: ExampleUsecase, handler: 'print', responseHandler: FileResponse }
];
