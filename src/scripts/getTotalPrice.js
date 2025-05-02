import { readProducts } from '../utils/readDb.js';

const getTotalPrice = async () => {
  const allData = await readProducts();

  //   let totalPrice = 0;
  //   for (const element of allData) {
  //     const elPrice = parseFloat(element.price);
  //     totalPrice = elPrice + totalPrice;
  //   }

  const totalPrice = allData.reduce(
    (acc, item) => (acc += parseFloat(item.price)),
    0,
  );
  return totalPrice;
};

console.log(await getTotalPrice());
