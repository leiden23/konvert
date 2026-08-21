import style from "./dashboard.module.scss";

import { type Category } from "@/entities/receipt";
import { ReceiptItem } from "@/features/receipt-item";
import { Button } from "@/shared/ui/button";
import { Spacer } from "@/shared/ui/spacer";
import { Stack } from "@/shared/ui/stack";

const categoriesMock: Category[] = [
  { name: "Продукты", icon: "🍏" },
  { name: "Развлечения", icon: "🎉" },
  { name: "Одежда", icon: "🎉" },
  { name: "Подписки", icon: "🎉" },
  { name: "Декор", icon: "🎉" },
];

export const DashboardPage = () => {
  return (
    <main className={style.page}>
      <Stack dir="column" className={style.receipt}>
        <div className={style.receipt__decor}></div>
        <div className={style.receipt__title}>НОВЫЙ ЧЕК</div>
        <hr className={style.separator} />

        <ReceiptItem categories={categoriesMock} />

        <Button variant="tertiary">+ добавить строку</Button>
        <Spacer height={16} />
        <hr className={style.separator} />
        <Spacer height={10} />
        <Stack dir="row" className={style.receipt__bottom}>
          <div className={style.receipt__date}>
            <div className={style.receipt__date_font}>дата:</div>
            <input type="date" className={style.receipt__date_input} />
          </div>
          <Stack dir="column" className={style.receipt__result}>
            <div className={style.receipt__result__name}>итого</div>
            <Stack dir="row" gap={4} className={style.receipt__result__price}>
              <div>{"0"}</div>
              <div>₽</div>
            </Stack>
          </Stack>
        </Stack>
        <Spacer height={20} />
        <Button className={style.receipt__button}>сохранить чек</Button>
      </Stack>
    </main>
  );
};
