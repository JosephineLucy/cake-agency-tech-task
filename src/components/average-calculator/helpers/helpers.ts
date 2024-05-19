import { ordersService } from "../../../services/orders";
import { Order, OrderResponse } from "../../../types/orderService";

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

export function getOrderTotal(order: Order): number {
  const { items } = order;
  const orderTotal = items.reduce(
    (totalValue, item) => totalValue + item.price,
    0
  );
  return orderTotal;
}

export function getGrandTotal(orderTotals: number[]): number {
  return orderTotals.reduce(
    (totalValue, orderTotal) => totalValue + orderTotal
  );
}

export function getOrderLength(): number {
  return 5;
}

export function getOrderAverage(): number {
  /*

  calculate each order's total value = items[0].price +  items[1].price +  items[2].price order total = orderTotal

  add up each order's total = order total + order total + order total = grandTotal

  count how many orders there are = response.orders.length() = numOfOrders

  calculate the average = grandTotal / numOfOrders

  */
  return 5;
}
