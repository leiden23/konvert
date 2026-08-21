import type { FC } from 'react';

import style from './category-button.module.scss';

import { Button } from '@/shared/ui/button';
import { Stack } from '@/shared/ui/stack';

type Props = {
    name: string;
    icon: string;
};

export const CategoryButton: FC<Props> = ({ name, icon }) => {
    return (
        <Button variant="secondary" className={style.category}>
            <Stack gap={6}>
                <div>{icon}</div>
                <div>{name}</div>
            </Stack>
        </Button>
    );
};
