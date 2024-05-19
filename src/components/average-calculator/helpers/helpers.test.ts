import { Order, OrderList } from "../../../types/orders";
import {
  getGrandTotal,
  calculateOrderAverage,
  getOrderLength,
  getOrderTotal,
  getAverage,
} from "./helpers";

const testOrder: Order = {
  created_at: "",
  customer: { email: "", name: "" },
  id: "",
  items: [
    { name: "kitten", price: "2", sku: "" },
    { name: "puppy", price: "3", sku: "" },
    { name: "bunny", price: "4", sku: "" },
  ],
};

const testOrderTwo: Order = {
  created_at: "",
  customer: { email: "", name: "" },
  id: "",
  items: [
    { name: "piglet", price: "21", sku: "" },
    { name: "duckling", price: "5", sku: "" },
  ],
};

const testOrderThree: Order = {
  created_at: "",
  customer: { email: "", name: "" },
  id: "",
  items: [{ name: "lion cub", price: "50", sku: "" }],
};

describe("getOrderTotal", () => {
  test("when given an order, returns price total", () => {
    const expectedOrderTotal = 9;
    const actualOrderTotal = getOrderTotal(testOrder);

    expect(actualOrderTotal).toBe(expectedOrderTotal);
  });
});

describe("getGrandTotal", () => {
  test("when given a list of order totals, returns the grand total", () => {
    const testTotals: number[] = [4, 8, 3, 5];

    const expectedGrandTotal = 20;
    const actualGrandTotal = getGrandTotal(testTotals);

    expect(actualGrandTotal).toBe(expectedGrandTotal);
  });
});

describe("getOrderLength", () => {
  test("when a list of orders, returns the number of orders in the list", () => {
    const testOrderList: OrderList = [testOrder, testOrderTwo, testOrderThree];

    const expectedOrderLength = 3;
    const actualOrderLength = getOrderLength(testOrderList);

    expect(actualOrderLength).toBe(expectedOrderLength);
  });
});

describe("getAverage", () => {
  test("when given the grand total and the number of orders, returns the average order value", () => {
    const expectedOrderAverage = 22.25;
    const actualOrderAverage = getAverage(89, 4);

    expect(actualOrderAverage).toBe(expectedOrderAverage);
  });
});

describe("calculateOrderAverage", () => {
  test("when a given list of orders, returns the order average", () => {
    const testOrderList: OrderList = [testOrder, testOrderTwo, testOrderThree];

    const expectedOrderAverage = 28.33;
    const actualOrderAverage = calculateOrderAverage(testOrderList);

    expect(actualOrderAverage).toBe(expectedOrderAverage);
  });
});
