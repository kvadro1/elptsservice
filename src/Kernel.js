import { createContainer, asValue, asClass } from 'awilix';
import path from 'path';
import glob from 'glob';
import prisma from '../libs/prisma/prisma.js';

export default class Kernel {
  constructor() {
    this.container = createContainer();
  }

  async createApplication() {
    await this.registerClasses();
    await this.registerValues();

    return this.container;
  }

  async registerValues() {
    this.container.register({
      prisma: asValue(prisma),
      documentsPath: asValue(process.env.DOCUMENTS_PATH)
    });
  }

  async registerClasses() {
    for (const file of glob.sync('src/@(services|repositories|adapters)/*.js')) {
      const pathFile = path.parse(file);
      const name = pathFile.name;
      const folder = pathFile.dir.replace('src/', '');
      const instanceName = name[0].toLowerCase() + name.slice(1);
      const module = await import(`./${folder}/${name}.js`);
      this.container.register({
        [instanceName]: asClass(module.default)
      });
    }
  }
}
