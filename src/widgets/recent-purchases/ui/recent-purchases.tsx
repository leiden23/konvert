import type { FC } from 'react';

import style from './recent-purchases.module.scss';

import { Card } from '@/shared/ui/card';
import { Stack } from '@/shared/ui/stack';
import { Tape } from '@/shared/ui/tape';

type RecentPurchasePreview = {
    id: string;
    name: string;
    emoji: string;
    date: string;
    price: number;
    backgroundColor: string;
};

const purchasesMock: RecentPurchasePreview[] = [
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

const colors = ['#c9b48f', '#b4c896', '#c46a8a', '#5f82a6'];

export const RecentPurchases: FC = () => {
    return (
        <>
            <div className={style.title}>последние покупки</div>
            <div className={style.list}>
                <Stack dir="row" gap={28}>
                    {purchasesMock.map((purchase, index) => (
                        <Card
                            key={purchase.id}
                            padding={12}
                            className={style.card}
                        >
                            <Tape
                                color={colors[index % colors.length]}
                                placement="center"
                                size="medium"
                            />
                            <Stack
                                gap={8}
                                dir="column"
                                className={style.columnInCard}
                            >
                                <div
                                    className={style.image}
                                    style={{
                                        backgroundColor:
                                            purchase.backgroundColor,
                                    }}
                                >
                                    <span className={style.emoji}>
                                        {purchase.emoji}
                                    </span>
                                </div>
                                <div className={style.name}>
                                    {purchase.name}
                                </div>
                                <Stack
                                    justifyContent="space-between"
                                    dir="row"
                                    className={style.bottomRow}
                                >
                                    <span className={style.date}>
                                        {purchase.date}
                                    </span>
                                    <span className={style.price}>
                                        {purchase.price} ₽
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
