import { useState } from "react";
import { OrderResponse } from "../../types/orderService";
import { fetchOrders } from "./fetch-orders";
import "./styles.scss";
import AverageValue from "../average-value/AverageValue";

const AverageCalculator = () => {
  const [orders, setOrders] = useState<null | OrderResponse>(null);

  const onClick = async () => {
    const orders = await fetchOrders();
    console.log(orders, "orders");
  };

  return (
    <main className="average-calculator">
      <AverageValue value={21} />
      <button onClick={onClick}>Fetch Orders</button>
    </main>
  );
};

export default AverageCalculator;
