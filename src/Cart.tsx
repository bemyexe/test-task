import "./App.css";

interface IProps {
  name: string;
  price: number;
  count: number;
}

export const Cart = ({ name, price, count }: IProps) => {
  return (
    <div className="cart">
      <div className="cart-item">
        <p>Название:</p> <p>{name}</p>
      </div>
      <div className="cart-item">
        <p>Сумма:</p> <p>{price}</p>
      </div>
      <div className="cart-item">
        <p>Количество:</p> <p>{count}</p>
      </div>
    </div>
  );
};
