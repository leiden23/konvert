import clsx from 'clsx';
import type { CSSProperties, FC } from 'react';

import style from './tape.module.scss';

type Props = {
    placement: 'left' | 'center' | 'right';
    size?: 'medium' | 'big';
    color: CSSProperties['backgroundColor'];
};

export const Tape: FC<Props> = ({ placement, size = 'big', color }) => {
    return (
        <div
            aria-hidden="true"
            className={clsx(style.tape, style[size], style[placement])}
            style={{ backgroundColor: color }}
        />
    );
};
