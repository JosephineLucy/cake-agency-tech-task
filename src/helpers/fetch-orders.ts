import { ordersService } from "../services/orders";
import { OrderResponse } from "../types/orderService";

export function fetchOrders(): Promise<OrderResponse> {
  return ordersService
    .fetchOrders()
    .then((orders: OrderResponse) => {
      return orders;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
