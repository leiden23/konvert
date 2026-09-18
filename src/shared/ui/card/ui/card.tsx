import clsx from 'clsx';
import type { CSSProperties, FC, ReactNode } from 'react';

import style from './card.module.scss';

type Props = {
    padding?: CSSProperties['padding'];
    className?: string;
    children: ReactNode;
};

export const Card: FC<Props> = ({ padding = 26, children, className }) => {
    return (
        <div className={clsx(style.card, className)} style={{ padding }}>
            {children}
        </div>
    );
};
