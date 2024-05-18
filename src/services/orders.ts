import { OrderResponse } from "../types/orderService";
import { apiServiceInstance } from "./axios";

export const ordersService = {
  fetchOrders: async (): Promise<OrderResponse> => apiServiceInstance.get("/"),
};
