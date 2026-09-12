import style from './dashboard.module.scss';

import { ReceiptCreator } from '@/widgets/receipt-creator';

export const DashboardPage = () => {
    return (
        <main className={style.page}>
            <ReceiptCreator />
        </main>
    );
};
