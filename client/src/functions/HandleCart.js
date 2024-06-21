export const HandleCart = (category, product, setCart) => {
  setCart((prev) => [[category,product], ...prev]);
};
