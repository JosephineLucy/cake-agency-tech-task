import { Order } from "../../../types/orderService";
import { getOrderTotal } from "./helpers";

describe("getOrderTotal", () => {
  test("when given an order, returns price total", () => {
    const testOrder: Order = {
      created_at: "",
      customer: { email: "", name: "" },
      id: "",
      items: [
        { name: "kitten", price: 2, sku: "" },
        { name: "puppy", price: 3, sku: "" },
        { name: "bunny", price: 4, sku: "" },
      ],
    };

    const expectedOrderTotal = 9;
    const actualOrderTotal = getOrderTotal(testOrder);

    expect(actualOrderTotal).toBe(expectedOrderTotal);
  });
});
