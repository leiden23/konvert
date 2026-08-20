import type React from 'react'
import style from './button.module.scss'
import type { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'testGreen',
    children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({children, variant = 'primary', ...props}) => {
    return (
        <button className={clsx(style.button, style[variant], props.className)} >
            {children}
        </button>
    )
}