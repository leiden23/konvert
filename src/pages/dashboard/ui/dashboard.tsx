import { Button } from "../../../shared/ui/button";
import { Spacer } from "../../../shared/ui/spacer";
import { Stack } from "../../../shared/ui/stack";
import style from "./dashboard.module.scss";

export const DashboardPage = () => {
  return (
    <main className={style.page}>
      <Stack dir="column" className={style.receipt}>
        <div className={style.receipt__decor}></div>
        <div className={style.receipt__title}>НОВЫЙ ЧЕК</div>
        <hr className={style.separator} />
        <Stack dir="column" className={style.receipt__item}>
          <Stack dir="row" gap={8} className={style.receipt__categories}>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🏠</div>
                <div>Дом</div>
              </Stack>
            </Button>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🍏</div>
                <div>Продукты</div>
              </Stack>
            </Button>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🎉</div>
                <div>Развлечения</div>
              </Stack>
            </Button>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🎉</div>
                <div>Развлечения</div>
              </Stack>
            </Button>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🎉</div>
                <div>Развлечения</div>
              </Stack>
            </Button>
            <Button variant="secondary" className={style.receipt__category}>
              <Stack gap={6}>
                <div>🎉</div>
                <div>Развлечения</div>
              </Stack>
            </Button>
          </Stack>
          <Spacer height={8} />
          <div className={style.receipt__field}>
            <Stack dir="row" gap={8} className={style.receipt__fieldRow}>
              <input
                className={style.receipt__field__name}
                placeholder="название товара"
              />
              <input type="number" className={style.receipt__field__price} placeholder="0" />
              <div className={style.receipt__field__currency}></div>
            </Stack>
          </div>
        </Stack>
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
