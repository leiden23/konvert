import style from './envelopes.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

const envelopesMock = [
    {
        id: '1',
        name: 'Еда',
        emoji: '🍜',
        spentMoney: 123,
        limit: 234,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '2',
        name: 'Транспорт',
        emoji: '🚌',
        spentMoney: 12,
        limit: 567,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '3',
        name: 'Еда',
        emoji: '🍜',
        spentMoney: 123,
        limit: 234,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '4',
        name: 'Дом',
        emoji: '🏠',
        spentMoney: 12,
        limit: 567,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '5',
        name: 'Развлечения',
        emoji: '🎈',
        spentMoney: 123,
        limit: 234,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
    {
        id: '6',
        name: 'Здоровье',
        emoji: '🌿',
        spentMoney: 12,
        limit: 567,
        backgroundColor: 'rgba(201, 111, 74, 0.133)',
    },
];

export const Envelopes = () => {
    return (
        <>
            <div className={style.title}>конверты</div>
            <Spacer height={12} />
            <div className={style.envelopes}>
                {envelopesMock.map((envelope) => {
                    const progress = Math.min(
                        100,
                        (envelope.spentMoney / envelope.limit) * 100,
                    );
                    return (
                        <div key={envelope.id} className={style.card}>
                            <Stack dir="column" style={{ width: '100%' }}>
                                <Stack dir="row" alignItems="center">
                                    <span
                                        className={style.emojiBackground}
                                        style={{
                                            backgroundColor:
                                                envelope.backgroundColor,
                                        }}
                                    >
                                        <span className={style.emoji}>
                                            {envelope.emoji}
                                        </span>
                                    </span>
                                    <Spacer width={12} />
                                    <span className={style.name}>
                                        {envelope.name}
                                    </span>
                                </Stack>
                                <Spacer height={16} />
                                <Stack dir="row">
                                    <span className={style.spentMoney}>
                                        {envelope.spentMoney} ₽
                                    </span>
                                    <span className={style.limit}>
                                        / {envelope.limit} ₽
                                    </span>
                                </Stack>
                                <Spacer height={8} />
                                <div
                                    className={style.progress}
                                    role="progressbar"
                                    aria-valuenow={progress}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    <div
                                        className={style.progressFill}
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <Spacer height={8} />
                                <div className={style.balance}>
                                    осталось{' '}
                                    {envelope.limit - envelope.spentMoney} ₽
                                </div>
                            </Stack>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
