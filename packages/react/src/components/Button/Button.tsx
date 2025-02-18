import { buttonStyle } from '@strawberry-ui/styles/components/Button'
import { ButtonProps, ButtonPropsWithType, LinkProps } from './Button.types'
import { Spinner } from '../Spinner'

export const Button = ({
    as = 'button',
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    icon,
    iconPosition = 'start',
    children,
    type = 'button',
    disabled = false,
    isLoading = false,
    ...rest
}: ButtonProps) => {
    const isTextButton = children != null

    const buttonClasses = buttonStyle({
        variant,
        size,
        fullWidth,
        textButton: isTextButton,
    })

    const content = isLoading ? (
        <Spinner color='inherit' />
    ) : (
        <>
            {icon && iconPosition === 'start' && icon}
            {children}
            {icon && iconPosition === 'end' && icon}
        </>
    )

    if (as === 'a') {
        return (
            <a className={buttonClasses} {...(rest as LinkProps)}>
                {content}
            </a>
        )
    }

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={isLoading || disabled}
            {...(rest as ButtonPropsWithType)}
        >
            {content}
        </button>
    )
}
