//* utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 6545,
  name: "Mouse",
  price: "500 TK",
  stock: 400,
  color: "Black",
};

type OptionalProduct = Partial<Product>;

type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "500",
};
