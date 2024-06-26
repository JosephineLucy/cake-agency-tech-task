import { ordersService } from "../../../services/orders";
import { Order, OrderList, OrderResponse } from "../../../types/orders";

export function fetchOrders(): Promise<OrderList> {
  return ordersService
    .fetchOrders()
    .then((orderResponse: OrderResponse) => {
      return orderResponse.orders;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export function getOrderTotal(order: Order): number {
  const { items } = order;
  const orderTotal = items.reduce(
    (totalValue, item) => totalValue + parseInt(item.price),
    0
  );
  return orderTotal;
}

export function getAllOrderTotals(orderList: OrderList) {
  return orderList.map((order: Order) => {
    return getOrderTotal(order);
  });
}

export function getGrandTotal(orderTotals: number[]): number {
  return orderTotals.reduce(
    (totalValue, orderTotal) => totalValue + orderTotal
  );
}

export function getAverage(grandTotal: number, orderLength: number): string {
  const average: number = grandTotal / orderLength;

  const roundedAverage = Math.round(average * 100) / 100;

  return roundedAverage.toFixed(2);
}

export function calculateOrderAverage(orderList: OrderList): string {
  const orderTotals: number[] = getAllOrderTotals(orderList);

  const grandTotal: number = getGrandTotal(orderTotals);

  const orderLength: number = orderList.length;

  const average: string = getAverage(grandTotal, orderLength);

  return average;
}
