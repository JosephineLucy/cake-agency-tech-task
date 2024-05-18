import { useState } from "react";
import { OrderResponse } from "../../types/orderService";
import { fetchOrders } from "../../helpers/fetch-orders";
import "./styles.scss";
import AverageValue from "../average-value/AverageValue";

const Average = () => {
  const [orders, setOrders] = useState<null | OrderResponse>(null);

  return (
    <main className="average">
      <AverageValue value={21} />
      <button onClick={fetchOrders}>Fetch Orders</button>
    </main>
  );
};

export default Average;
