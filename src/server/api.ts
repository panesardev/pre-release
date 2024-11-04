import { RequestHandler } from "express";

export const handler: RequestHandler = (request, response) => {
  response.json({
    message: 'hello world',
  });
}
