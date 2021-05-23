import { v4 as uuidv4 } from 'uuid';
import db from '../db';

const getAllCakes = () => db;

const insertCake = (cake: Omit<Cake, 'id'>) => {
  const cakeInstance = { ...cake, id: uuidv4() };
  db.unshift(cakeInstance);
  return cakeInstance;
};

export { getAllCakes, insertCake };
