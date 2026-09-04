import { useState } from 'react';

import style from './dashboard.module.scss';

import { type Category, type ReceiptItemData } from '@/entities/receipt';
import { ReceiptItem } from '@/features/receipt-item';
import { Button } from '@/shared/ui/button';
import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

const categoriesMock: Category[] = [
    { id: '1', name: 'Продукты', icon: '🍏' },
    { id: '2', name: 'Развлечения', icon: '🎉' },
    { id: '3', name: 'Одежда', icon: '🎉' },
    { id: '4', name: 'Подписки', icon: '🎉' },
    { id: '5', name: 'Декор', icon: '🎉' },
];

export const DashboardPage = () => {
    const [items, setItems] = useState<ReceiptItemData[]>([
        {
            id: crypto.randomUUID(),
            name: 'Хумус',
            price: '139',
            categoryId: '1',
        },
        {
            id: crypto.randomUUID(),
            name: 'Свитер',
            price: '67',
            categoryId: '3',
        },
        {
            id: crypto.randomUUID(),
            name: 'Полусферы деревянные',
            price: '289',
            categoryId: '5',
        },
    ]);

    const handleAddItem = () => {
        const newItem: ReceiptItemData = {
            id: crypto.randomUUID(),
            name: '',
            price: '',
            categoryId: null,
        };

        setItems((currentItems) => [...currentItems, newItem]);
    };
    const handleDeleteItem = (id: string) => {
        setItems((currentItem) => {
            if (currentItem.length <= 1) {
                return currentItem;
            }
            return currentItem.filter((item) => item.id !== id);
        });
    };

    const handleChangeItem = (
        id: string,
        changes: Partial<ReceiptItemData>,
    ) => {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id ? { ...item, ...changes } : item,
            ),
        );
    };
    const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);

    return (
        <main className={style.page}>
            <Stack dir="column" className={style.receipt}>
                <div className={style.receipt__decor}></div>
                <div className={style.receipt__title}>НОВЫЙ ЧЕК</div>
                <hr className={style.separator} />

                {items.map((item) => (
                    <ReceiptItem
                        item={item}
                        key={item.id}
                        categories={categoriesMock}
                        showDelete={items.length >= 2}
                        onDelete={() => handleDeleteItem(item.id)}
                        onChange={handleChangeItem}
                    />
                ))}

                <Button appearance="tertiary" onClick={handleAddItem}>
                    + добавить строку
                </Button>
                <Spacer height={16} />
                <hr className={style.separator} />
                <Spacer height={10} />
                <Stack dir="row" className={style.receipt__bottom}>
                    <div className={style.receipt__date}>
                        <div className={style.receipt__date_font}>дата:</div>
                        <input
                            type="date"
                            className={style.receipt__date_input}
                        />
                    </div>
                    <Stack dir="column" className={style.receipt__result}>
                        <div className={style.receipt__result__name}>итого</div>
                        <Stack
                            dir="row"
                            gap={4}
                            className={style.receipt__result__price}
                        >
                            <div>{total}</div>
                            <div>₽</div>
                        </Stack>
                    </Stack>
                </Stack>
                <Spacer height={20} />
                <Button
                    appearance={'primary'}
                    className={style.receipt__button}
                >
                    сохранить чек
                </Button>
            </Stack>
        </main>
    );
};
