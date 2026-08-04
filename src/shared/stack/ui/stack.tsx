import type { CSSProperties, FC, HTMLAttributes, ReactNode } from "react"

type StackProps = {
    dir?: 'row' | 'column',
    alignItems?: CSSProperties['alignItems'],
    className?: HTMLAttributes<HTMLDivElement>['className'],
    children?: ReactNode,
    style?: HTMLAttributes<HTMLDivElement>['style']
}

export const Stack: FC<StackProps> = ({ className, dir = 'row', alignItems, children, style }) => {
    return (
        <div className={className} style={{ display: "inline-flex", flexDirection: dir, alignItems, ...style }}>
            {children}
        </div>
    )
}