import clsx from 'clsx';
import type React from 'react';
import type { FC, HTMLAttributes } from 'react';

import style from './button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    appearance: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
    children,
    appearance = 'primary',
    ...props
}) => {
    return (
        <button
            className={clsx(style.button, style[appearance], props.className)}
        >
            {children}
        </button>
    );
};
