import Usecase from './Usecase.js';

export default class ExampleUsecase extends Usecase {
  /**
   * @param {ExampleRepository} exampleRepository
   * @returns {Promise<{text: string}>}
   */
  async index({ exampleRepository }) {
    console.log(this.request);
    console.log('ExampleRepository table name: ', exampleRepository.table);
    return { text: 'index' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async create() {
    return { text: 'create' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async read() {
    return { text: 'read' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async update() {
    return { text: 'update' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async delete() {
    return { text: 'delete' };
  }

  /**
   * @param {FileService} fileService
   * @returns {Promise<{file: Buffer, filename: *, contentType: *}>}
   */
  async print({ fileService }) {
    return fileService.get(this.request.path);
  }
}
