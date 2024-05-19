export type OrderResponse = {
  orders: OrderList;
};

export type OrderList = Order[];

export type Order = {
  id: string;
  created_at: string;
  items: Item[];
  customer: Customer;
};

type Item = {
  name: string;
  price: string;
  sku: string;
};

type Customer = {
  name: string;
  email: string;
};
