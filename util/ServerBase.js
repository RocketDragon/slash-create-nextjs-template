import { Server, ServerRequestHandler } from 'slash-create';
import { NextApiHandler } from 'next';

export default class ServerBase extends Server {
  constructor() {
    super({ alreadyListening: true });
  }

  nextEndpoint = (req, res) => {
    if(!this._handler) return res.status(503).send('Server has no handler.');
    if(req.method !== 'POST') return res.status(405).send('Server only supports POST requests.');

    this._handler({
      headers: req.headers,
      body: req.body,
      request: req,
      response: res
    }, async (response) => {
      res.status(response.status || 200);
      if (response.headers)
        for (const key in response.headers)
          res.setHeader(key, response.headers[key]);

      res.send(response.body);
    });
  }

  createEndpoint(path, handler) {
    this._handler = handler;
  }
}