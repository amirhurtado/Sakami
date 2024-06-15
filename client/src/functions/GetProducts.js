export const GetProducts = async () => {
  const url = "data.json";
  const res = await fetch(url);
  const data = await res.json();

  return data.productos;
};
