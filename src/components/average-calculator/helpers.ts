import { ordersService } from "../../services/orders";
import { OrderResponse } from "../../types/orderService";

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

export function getOrderTotal(): number {
  // takes an order object
  // runs through each item in the items array
  // adds together the price of each item in the array
  // returns a number
  return 5;
}

export function getGrandTotal(): number {
  // takes an array of numbers and adds them together - use reduce
  // returns a number
  return 5;
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
