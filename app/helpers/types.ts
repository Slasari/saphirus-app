export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  net_content: string;
  type: string;
  family: string;
  fragrance: Fragrance;
  usage: string;
  image: string[];
  created_at: string;
  deleted: boolean;
};

export type FamilyGroup = {
  id: string;
  name: string;
  icon: string;
  total_products: number
}

export type Fragrance = {
  id: string;
  name: string;
}

export type Usage = {
  id: string;
  name: string;
}
