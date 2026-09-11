import { useState } from 'react';

import style from './dashboard.module.scss';

import {
    type Category,
    type Receipt,
    type ReceiptItemData,
} from '@/entities/receipt';
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

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };
    const [date, setDate] = useState(getCurrentDate);

    const createEmptyItem = (): ReceiptItemData => ({
        id: crypto.randomUUID(),
        name: '',
        price: '',
        categoryId: null,
    });

    const handleAddItem = () => {
        setItems((currentItems) => [...currentItems, createEmptyItem()]);
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

    const handleSaveReceipt = () => {
        if (!isReceiptValid) return;

        const newReceipt: Receipt = {
            id: crypto.randomUUID(),
            date,
            items: items.map((item) => ({ ...item })),
        };
        // TODO: integrate with backend later
        // eslint-disable-next-line no-console
        console.log('Receipt payload:', newReceipt);

        setItems([createEmptyItem()]);
        setDate('');
    };
    const isReceiptValid =
        date !== '' &&
        items.every(
            (item) =>
                item.name.trim() !== '' &&
                item.price !== '' &&
                Number(item.price) > 0 &&
                item.categoryId !== null,
        );

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
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
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
                    onClick={handleSaveReceipt}
                    disabled={!isReceiptValid}
                >
                    сохранить чек
                </Button>
            </Stack>
        </main>
    );
};
