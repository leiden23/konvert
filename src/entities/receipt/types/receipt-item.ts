import type { Category } from './category';

export type ReceiptItemData = {
    id: string;
    name: string;
    price: string;
    categoryId: Category['id'] | null;
};
