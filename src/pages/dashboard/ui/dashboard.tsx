import style from './dashboard.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { ReceiptCreator } from '@/widgets/receipt-creator';
import { RecentReceipts } from '@/widgets/recent-receipts';

export const DashboardPage = () => {
    return (
        <main className={style.page}>
            <ReceiptCreator />
            <Spacer height={46} />
            <RecentReceipts />
        </main>
    );
};
