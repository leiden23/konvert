import type { FC } from 'react';

import style from './recent-receipts.module.scss';

import { Card } from '@/shared/ui/card';
import { Stack } from '@/shared/ui/stack';

type RecentReceiptPreview = {
    id: string;
    name: string;
    emoji: string;
    date: string;
    price: number;
    backgroundColor: string;
};

const receiptsMock: RecentReceiptPreview[] = [
    {
        id: '1',
        name: 'Салатик вегетарианский',
        emoji: '🥗',
        date: '23 января',
        price: 234,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '2',
        name: 'Салатик вегетарианский',
        emoji: '🥗',
        date: '24 января',
        price: 567,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
];

export const RecentReceipts: FC = () => {
    return (
        <>
            <div className={style.title}>последние покупки</div>
            <div className={style.list}>
                <Stack dir="row" gap={10}>
                    {receiptsMock.map((product) => (
                        <Card
                            key={product.id}
                            padding={12}
                            className={style.card}
                        >
                            <Stack
                                gap={8}
                                dir="column"
                                className={style.columnInCard}
                            >
                                <div
                                    className={style.image}
                                    style={{
                                        backgroundColor:
                                            product.backgroundColor,
                                    }}
                                >
                                    <span className={style.emoji}>
                                        {product.emoji}
                                    </span>
                                </div>
                                <div className={style.name}>{product.name}</div>
                                <Stack
                                    justifyContent="space-between"
                                    dir="row"
                                    className={style.bottomRow}
                                >
                                    <span className={style.date}>
                                        {product.date}
                                    </span>
                                    <span className={style.price}>
                                        {product.price} ₽
                                    </span>
                                </Stack>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            </div>
        </>
    );
};
