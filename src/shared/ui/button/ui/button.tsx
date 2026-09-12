import clsx from 'clsx';
import type React from 'react';
import type { ComponentPropsWithoutRef, FC } from 'react';

import style from './button.module.scss';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    appearance: 'primary' | 'secondary' | 'tertiary' | 'round';
    selected?: boolean;
    children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
    children,
    appearance = 'primary',
    selected = false,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                style.button,
                style[appearance],
                selected && style.selected,
                className,
            )}
        >
            {children}
        </button>
    );
};
