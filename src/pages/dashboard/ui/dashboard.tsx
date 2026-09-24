import style from './dashboard.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { Envelopes } from '@/widgets/envelopes/ui/envelopes';
import { ReceiptCreator } from '@/widgets/receipt-creator';

export const DashboardPage = () => {
    return (
        <main className={style.page}>
            <ReceiptCreator />
            <Spacer height={46} />
            <Envelopes />
            <Spacer height={46} />
        </main>
    );
};
