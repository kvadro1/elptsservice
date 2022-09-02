import express from 'express';
import routes from '../../src/http/routes.js';
import JsonResponse from '../../src/http/responses/JsonResponse.mjs';
import Kernel from '../../src/Kernel.js';

const router = express.Router();

for (const route of routes) {
  router[route.method](
    route.url,
    getHandler(route.usecase, route.handler, route?.responseHandler || JsonResponse)
  );
}

function getHandler(usecase, handler, responseHandler) {
  return async (req, res) => {
    try {
      const scope = await createScope(req, res);
      const request = buildRequest(req);
      const instance = new usecase(request);
      const result = await instance[handler](scope.cradle);
      await responseHandler.build(res, result);
    } catch (err) {
      console.log(err);
      await JsonResponse.build(res, { error: err.message });
    }
  };
}

async function createScope(req, res, next) {
  const kernel = new Kernel();

  return kernel.createApplication(req, res, next);
}

function buildRequest(req) {
  let request = {};

  if (req.body) {
    request = { ...(typeof req.body === 'string' ? JSON.parse(req.body) : req.body) };
  }

  if (req.params) {
    request = { ...request, ...req.params };
  }

  if (req.query) {
    request = { ...request, ...req.query };
  }

  return request;
}

export default router;
