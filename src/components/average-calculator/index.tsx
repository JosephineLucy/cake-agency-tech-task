import { useState } from "react";
import { OrderList } from "../../types/orders";
import { calculateOrderAverage, fetchOrders } from "./helpers/helpers";
import "./styles.scss";
import AverageValue from "../average-value/AverageValue";

const AverageCalculator = () => {
  const [orderAverage, setOrderAverage] = useState<string>("");

  const onClick = async () => {
    const orders: OrderList = await fetchOrders();
    console.log(orders, "<< orders");
    const orderAverage: string = calculateOrderAverage(orders);
    if (orderAverage) {
      setOrderAverage(orderAverage);
    }
    console.log(orderAverage, "<< average");
  };

  return (
    <main className="average-calculator">
      <AverageValue value={orderAverage} />
      <button onClick={onClick} aria-label="fetch order average">
        Fetch Order Average
      </button>
    </main>
  );
};

export default AverageCalculator;
