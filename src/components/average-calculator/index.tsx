import { useState } from "react";
import { OrderList, OrderResponse } from "../../types/orders";
import { calculateOrderAverage, fetchOrders } from "./helpers/helpers";
import "./styles.scss";
import AverageValue from "../average-value/AverageValue";

const AverageCalculator = () => {
  const [orders, setOrders] = useState<OrderResponse | null>(null);
  const [orderAverage, setOrderAverage] = useState<number | null>(null);

  const onClick = async () => {
    const orders: OrderList = await fetchOrders();
    const orderAverage: number = calculateOrderAverage(orders);
    console.log(orders, "<< orders");
    console.log(orderAverage, "<< average");
  };

  return (
    <main className="average-calculator">
      <AverageValue value={21} />
      <button onClick={onClick}>Fetch Orders</button>
    </main>
  );
};

export default AverageCalculator;
