import { OrderResponse } from "../types/orders";
import { apiServiceInstance } from "./axios";

export const ordersService = {
  fetchOrders: (): Promise<OrderResponse> => apiServiceInstance.get("/orders"),
};
