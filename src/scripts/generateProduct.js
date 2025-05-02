import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeDb.js';
import { readProducts } from '../utils/readDb.js';
import { PATH_DB } from '../constants/product.js';
const generateProducts = async (number) => {
  let productSafe = [];
  const allData = await readProducts();
  for (let i = 1; i <= number; i++) {
    productSafe.push(createFakeProduct());
  }
  for (let item of productSafe) {
    allData.push(item);
  }
  writeProducts(allData, PATH_DB);
};

generateProducts(10);
