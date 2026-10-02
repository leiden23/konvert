import type { FC } from 'react';

import style from './envelope-creator.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

type Props = {
    onClick: () => void;
};

export const EnvelopesCreator: FC<Props> = ({ onClick }) => {
    return (
        <div className={style.button} onClick={onClick}>
            <Stack dir="column" className={style.card}>
                <Spacer height={54} />
                <div className={style.plus}>+</div>
                <div className={style.text}>новый конверт</div>
            </Stack>
        </div>
    );
};
