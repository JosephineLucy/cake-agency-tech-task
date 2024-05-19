import { useState } from "react";
import { calculateOrderAverage, fetchOrders } from "./helpers/helpers";
import "./styles.scss";
import AverageValue from "../average-value";
import ErrorMessage from "../error-boundary/ErrorMessage";
import Loader from "../loader";

const AverageCalculator = () => {
  const [orderAverage, setOrderAverage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClick = () => {
    setError(false);
    setIsLoading(true);
    fetchOrders()
      .then((orders) => {
        if (orders) {
          const orderAverage: string = calculateOrderAverage(orders);
          setOrderAverage(orderAverage);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <main className="average-calculator">
      <AverageValue value={orderAverage} />
      <button
        className="average-calculator__button"
        onClick={onClick}
        aria-label="fetch order average"
      >
        Fetch Order Average
      </button>
    </main>
  );
};

export default AverageCalculator;
