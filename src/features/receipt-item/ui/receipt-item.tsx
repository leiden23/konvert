import type { FC } from 'react';

import { ReceiptInputRow } from './receipt-input-row';
import style from './receipt-item.module.scss';

import {
    CategoryButton,
    type Category,
    type ReceiptItemData,
} from '@/entities/receipt';
import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

type Props = {
    categories: Category[];
    showDelete: boolean;
    item: ReceiptItemData;
    onDelete: () => void;
    onChange: (id: string, changes: Partial<ReceiptItemData>) => void;
};

export const ReceiptItem: FC<Props> = ({
    categories,
    showDelete,
    item,
    onDelete,
    onChange,
}) => {
    return (
        <Stack dir="column" className={style.item}>
            <Stack dir="row" gap={8} className={style.categories}>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        name={category.name}
                        icon={category.icon}
                        selected={item.categoryId === category.id}
                        onClick={() =>
                            onChange(item.id, { categoryId: category.id })
                        }
                    />
                ))}
            </Stack>
            <Spacer height={8} />
            <ReceiptInputRow
                item={item}
                showDelete={showDelete}
                onChange={onChange}
                onDelete={onDelete}
            />
        </Stack>
    );
};
