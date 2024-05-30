export type IProduct = {
  name: string;
  price: number;
  count: number;
};

export const PRODUCTS: IProduct[] = [
  { name: "apple", price: 10, count: 10 },
  { name: "banana", price: 20, count: 20 },
  { name: "orange", price: 30, count: 30 },
  { name: "bread", price: 50, count: 50 },
  { name: "milk", price: 60, count: 60 },
  { name: "eggs", price: 70, count: 70 },
  { name: "apple", price: 40, count: 40 },
  { name: "apple", price: 20, count: 15 },
  { name: "bread", price: 35, count: 10 },
];

export const SORTED_PRODUCTS: IProduct[] = Object.values(
  PRODUCTS.reduce((acc: { [key: string]: IProduct }, item: IProduct) => {
    if (!acc[item.name]) {
      acc[item.name] = { ...item };
    } else {
      acc[item.name].price += item.price;
      acc[item.name].count += item.count;
    }
    return acc;
  }, {})
);
