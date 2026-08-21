import type { FC } from "react";

import style from "./receipt-item.module.scss";

import { CategoryButton, type Category } from "@/entities/receipt";
import { Spacer } from "@/shared/ui/spacer";
import { Stack } from "@/shared/ui/stack";

type Props = {
  categories: Category[];
};

export const ReceiptItem: FC<Props> = ({ categories }) => {
  return (
    <Stack dir="column" className={style.item}>
      <Stack dir="row" gap={8} className={style.categories}>
        {categories.map((category) => (
          <CategoryButton name={category.name} icon={category.icon} />
        ))}
      </Stack>
      <Spacer height={8} />
      <div className={style.receipt__field}>
        <Stack dir="row" gap={8} className={style.fieldRow}>
          <input className={style.field__name} placeholder="название товара" />
          <input type="number" className={style.field__price} placeholder="0" />
        </Stack>
      </div>
    </Stack>
  );
};
