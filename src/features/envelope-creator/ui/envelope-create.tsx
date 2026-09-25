import style from './envelope-creator.module.scss';

import { Spacer } from '@/shared/ui/spacer';
import { Stack } from '@/shared/ui/stack';

export const EnvelopesCreator = () => {
    return (
        <Stack dir="column" className={style.card}>
            <Spacer height={54} />
            <div className={style.plus}>+</div>
            <div className={style.text}>создать категорию</div>
        </Stack>
    );
};
