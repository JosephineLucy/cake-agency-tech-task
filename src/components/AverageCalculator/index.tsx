import { useState } from "react";
import { calculateOrderAverage, fetchOrders } from "./helpers/helpers";
import AverageValueDisplay from "../AverageValueDisplay";
import ErrorMessage from "../ErrorBoundary/ErrorMessage/ErrorMessage";
import "./styles.scss";

const AverageCalculator = () => {
  const [orderAverage, setOrderAverage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const buttonText = orderAverage
    ? "Fetch a new order average"
    : "Fetch an order average";

  const onClick = () => {
    setError(false);
    fetchOrders()
      .then((orders) => {
        if (orders) {
          const orderAverage: string = calculateOrderAverage(orders);
          setOrderAverage(orderAverage);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) return <ErrorMessage />;

  return (
    <main className="average-calculator">
      <AverageValueDisplay value={orderAverage} />
      <button className="average-calculator__button" onClick={onClick}>
        {buttonText}
      </button>
    </main>
  );
};

export default AverageCalculator;
