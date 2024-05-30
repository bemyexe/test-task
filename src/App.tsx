import { useState } from "react";
import "./App.css";
import { Cart } from "./Cart";
import { IProduct, SORTED_PRODUCTS } from "./constants";

function App() {
  const [isFruit, setIsFruit] = useState(false);
  const handleChange = () => {
    setIsFruit(!isFruit);
  };

  const isFruitMap = isFruit
    ? SORTED_PRODUCTS.filter((item) =>
        ["apple", "banana", "orange"].includes(item.name)
      )
    : SORTED_PRODUCTS;

  const totalData = isFruitMap.reduce(
    (acc: { count: number; sum: number }, item: IProduct) => {
      return {
        count: acc.count + item.count,
        sum: acc.sum + item.price,
      };
    },
    { count: 0, sum: 0 }
  );

  const totalCount: number = totalData.count;
  const totalSum: number = totalData.sum;

  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={() => handleChange()}
          checked={isFruit}
        />
        Показывать только фрукты
      </div>
      <div>Общее количество: {totalCount}</div>
      <div>Общая цена: {totalSum}</div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {isFruitMap.map((product) => (
          <Cart
            key={product.name}
            name={product.name}
            price={product.price}
            count={product.count}
          />
        ))}
      </div>
    </>
  );
}
export default App;
