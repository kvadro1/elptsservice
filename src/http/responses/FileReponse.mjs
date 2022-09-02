import Response from './Response.mjs';

export default class FileResponse extends Response {
  /**
   * @param res
   * @param file
   * @param contentType
   * @param filename
   */
  static build(res, { file, contentType, filename }) {
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Length', file.length);
    res.setHeader('Content-Type', contentType);
    res.write(file, 'binary');
    res.end();
  }
}