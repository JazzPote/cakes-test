import { v4 as uuidv4 } from 'uuid';
import db from '../db';

const getAllCakes = () => db;

const getCakeById = (id: string) => db.find((cake) => cake.id === id);
const getCakeByName = (name: string) => db.find((cake) => cake.name === name);

const insertCake = (cake: Omit<Cake, 'id'>) => {
  const cakeInstance = { ...cake, id: uuidv4() };
  db.unshift(cakeInstance);
  return cakeInstance;
};

export { getAllCakes, getCakeById, getCakeByName, insertCake };
