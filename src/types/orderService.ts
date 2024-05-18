export type OrderResponse = {
  orders: OrderList;
};

type OrderList = Order[];

type Order = {
  id: string;
  created_at: string;
  items: Item[];
  customer: Customer;
};

type Item = {
  name: string;
  price: number;
  sku: string;
};

type Customer = {
  name: string;
  email: string;
};
