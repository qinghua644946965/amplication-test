import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  productId?: StringNullableFilter;
  productName?: StringNullableFilter;
};
