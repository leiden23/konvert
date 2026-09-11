import type { ReceiptItemData } from './receipt-item';

export type Receipt = {
    id: string;
    date: string;
    items: ReceiptItemData[];
};
