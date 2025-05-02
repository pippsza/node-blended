import * as fs from 'node:fs/promises';
export const writeProducts = async (updatedProducts, path) => {
  await fs
    .writeFile(path, JSON.stringify(updatedProducts, null, 2))
    .then(() => {
      console.log('done');
    })
    .catch((err) => {
      console.log(err);
    });
};
