import type { FC } from 'react';

import style from './receipt-input-row.module.scss';

import type { ReceiptItemData } from '@/entities/receipt';
import { Button } from '@/shared/ui/button';
import { Stack } from '@/shared/ui/stack';

type Props = {
    item: ReceiptItemData;
    showDelete: boolean;
    onChange: (id: string, changes: Partial<ReceiptItemData>) => void;
    onDelete: () => void;
};

export const ReceiptInputRow: FC<Props> = ({
    item,
    showDelete,
    onChange,
    onDelete,
}) => {
    return (
        <Stack dir="row" alignItems="center" gap={8} className={style.fieldRow}>
            <input
                className={style.name}
                placeholder="название товара"
                value={item.name}
                onChange={(event) =>
                    onChange(item.id, { name: event.target.value })
                }
            />
            <input
                type="number"
                className={style.price}
                placeholder="0"
                value={item.price}
                onChange={(event) =>
                    onChange(item.id, { price: event.target.value })
                }
            />
            {showDelete && (
                <Button onClick={onDelete} appearance="round">
                    ×
                </Button>
            )}
        </Stack>
    );
};
