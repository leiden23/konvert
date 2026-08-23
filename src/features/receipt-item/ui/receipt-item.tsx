import type { FC } from 'react';

import style from './receipt-item.module.scss';

import { CategoryButton, type Category, type ReceiptItemData } from '@/entities/receipt';
import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

type Props = {
    categories: Category[];
    showDelete: boolean;
    item: ReceiptItemData;
    onDelete: () => void;
    onChange: (
        id: string,
        changes: Partial<ReceiptItemData>,
    ) => void;
};

export const ReceiptItem: FC<Props> = ({ categories, showDelete, item, onDelete, onChange }) => {
    return (
        <Stack dir="column" className={style.item}>
            <Stack dir="row" gap={8} className={style.categories}>
                {categories.map((category) => (
                    <CategoryButton
                        key={`${category.name}-${category.icon}`}
                        name={category.name}
                        icon={category.icon}
                    />
                ))}
            </Stack>
            <Spacer height={8} />
            <div className={style.receipt__field}>
                <Stack dir="row" gap={8} className={style.fieldRow}>
                    <input
                        className={style.field__name}
                        placeholder="название товара"
                        value={item.name}
                        onChange={(event) => onChange(item.id, { name: event.target.value })}
                        />
                    <input
                        type="number"
                        className={style.field__price}
                        placeholder="0"
                        value={item.price}
                        onChange={(event) => onChange(item.id, { price: event.target.value })}
                    />
                    {showDelete && (
                        <button
                            onClick={onDelete}
                        >
                            ×
                        </button>
                    )}
                </Stack>
            </div>
        </Stack>
    );
};
