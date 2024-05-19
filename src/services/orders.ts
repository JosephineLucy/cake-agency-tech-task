import { OrderResponse } from "../types/orders";
import { apiServiceInstance } from "./axios";

export const ordersService = {
  fetchOrders: async (): Promise<OrderResponse> => apiServiceInstance.get("/"),
};
