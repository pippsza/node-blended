import { PATH_DB } from '../constants/product.js';
import * as fs from 'node:fs/promises';
export const readProducts = async () => {
  const resp = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

  return resp ? JSON.parse(resp) : [];
};
readProducts();
