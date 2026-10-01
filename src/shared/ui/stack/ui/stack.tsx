import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';

type StackProps = {
    dir?: 'row' | 'column';
    gap?: number;
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: ReactNode;
    style?: HTMLAttributes<HTMLDivElement>['style'];
};

export const Stack: FC<StackProps> = ({
    className,
    dir = 'row',
    gap,
    alignItems,
    justifyContent,
    children,
    style,
}) => {
    return (
        <div
            className={className}
            style={{
                display: 'inline-flex',
                flexDirection: dir,
                gap,
                alignItems,
                justifyContent,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
