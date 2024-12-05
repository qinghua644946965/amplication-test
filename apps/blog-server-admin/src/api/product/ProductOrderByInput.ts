import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
