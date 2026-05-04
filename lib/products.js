import productsData from "../data/products.json";

export const getAllProducts = () => {
  return productsData;
};

export const getProductById = (id) => {
  return productsData.find((product) => product.id === parseInt(id));
};

export const getPopularProducts = () => {
  // Return first 3 products as "popular"
  return productsData.slice(0, 3);
};