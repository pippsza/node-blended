import { readProducts } from '../utils/readDb.js';

const getProductsByMinPrice = async (price) => {
  const allData = await readProducts();
  console.log('\n filtering.. \n');
  return allData.filter((item) => item.price >= price);

  //   let filteredData = [];
  //   for (const element of allData) {
  //     if (element.price >= price) {
  //       filteredData.push(element);
  //     }
  //   }
  //   if (filteredData.length === 0) {
  //     console.log('Nothing has been found!');
  //     return [];
  //   }

  //   return filteredData;
};
console.log(await getProductsByMinPrice(2000));
