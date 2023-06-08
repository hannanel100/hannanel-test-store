import swell from "./swell";
export const getAllProducts = async () => {
  const products = await swell.products.list();

  return products.results;
};
