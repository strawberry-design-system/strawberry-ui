import { buttonStyle } from '@strawberry-ui/styles/components/Button'
import { ButtonProps, ButtonPropsWithType, LinkProps } from './Button.types'

const Button = ({
    as = 'button',
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    icon,
    iconPosition = 'start',
    children,
    type = 'button',
    disabled = false,
    ...rest
}: ButtonProps) => {
    const isGreaterThanOne = icon && children || children && children.length > 1

    const content = (
        <>
            {icon && iconPosition === 'start' && icon}
            {children}
            {icon && iconPosition === 'end' && icon}
        </>
    )

    if (as === 'a') {
        return (
            <a className={buttonStyle({
                variant,
                size,
                fullWidth,
                textButton: isGreaterThanOne
            })} {...(rest as LinkProps)}>
                {content}
            </a>
        )
    }

    return (
        <button type={type} className={buttonStyle({
            variant,
            size,
            fullWidth
        })} {...(rest as ButtonPropsWithType)}>
            {content}
        </button>
    )
}

export default Button
