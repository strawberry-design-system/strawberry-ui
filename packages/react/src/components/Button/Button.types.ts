export interface BaseProps {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
    children?: string
}

export interface ButtonPropsWithType extends BaseProps {
    as?: 'button'
    type?: 'button' | 'submit' | 'reset'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

export interface LinkProps extends BaseProps {
    as: 'a'
    type?: never
    href?: string
    disabled?: never
}

export type ButtonProps = ButtonPropsWithType | LinkProps