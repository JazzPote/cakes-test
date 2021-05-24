import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_CODES } from '../../../utils/constants';
import * as DAO from '../../../dao';

const getCakeHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id: cakeId } = req.query;
  const cakePayload = DAO.getCakeById(String(cakeId));
  return res.json(cakePayload);
};

const methodNotAllowedHandler = (req: NextApiRequest, res: NextApiResponse) =>
  res.status(HTTP_CODES.METHOD_NOW_ALLOWED).send(`${req.method} not allowed`);

function cakesHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCakeHandler(req, res);
    default:
      return methodNotAllowedHandler(req, res);
  }
}

export default cakesHandler;
