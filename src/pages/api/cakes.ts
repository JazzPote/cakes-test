import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_CODES } from '../../constants';
import * as DAO from '../../dao';

const getCakesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const payload = DAO.getAllCakes();
  return res.json(payload);
};

const methodNotAllowedHandler = (req: NextApiRequest, res: NextApiResponse) =>
  res.status(HTTP_CODES.METHOD_NOW_ALLOWED).send(`${req.method} not allowed`);

function cakesHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCakesHandler(req, res);
    default:
      return methodNotAllowedHandler(req, res);
  }
}

export default cakesHandler;
