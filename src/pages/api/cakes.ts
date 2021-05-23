import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_CODES } from '../../utils/constants';
import * as DAO from '../../dao';
import { postCakeValidationSchema } from '../../utils/validationSchemas';

const getCakesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const payload = DAO.getAllCakes();
  return res.json(payload);
};

const validatePostCake = async (req: NextApiRequest) => {
  const body = await postCakeValidationSchema.validate(req.body, { stripUnknown: true });
  const cakeAlreadyExists = DAO.getAllCakes().find((cake) => cake.name === body.name);
  if (cakeAlreadyExists) {
    throw new Error(`Cake "${body.name}" already exists`);
  }

  return body;
};

const postCakeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = await validatePostCake(req);
    const cake = DAO.insertCake(body);
    return res.json({ data: cake, method: req.method });
  } catch (error) {
    return res.status(HTTP_CODES.BAD_REQUEST).send(error.message);
  }
};

const methodNotAllowedHandler = (req: NextApiRequest, res: NextApiResponse) =>
  res.status(HTTP_CODES.METHOD_NOW_ALLOWED).send(`${req.method} not allowed`);

function cakesHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCakesHandler(req, res);
    case 'POST':
      return postCakeHandler(req, res);
    default:
      return methodNotAllowedHandler(req, res);
  }
}

export default cakesHandler;
