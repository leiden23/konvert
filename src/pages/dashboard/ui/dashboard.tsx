import style from './dashboard.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { ReceiptCreator } from '@/widgets/receipt-creator';
import { RecentPurchases } from '@/widgets/recent-purchases';

export const DashboardPage = () => {
    return (
        <main className={style.page}>
            <ReceiptCreator />
            <Spacer height={46} />
            <RecentPurchases />
        </main>
    );
};
