import { buttonStyle } from '@strawberry-ui/styles/components/Button'
import { ButtonElementCombined, ButtonProps, LinkElement } from './Button.types'
import { Spinner } from '../Spinner'

export const Button = ({
	as = 'button',
	variant = 'primary',
	tone = 'default',
	size = 'medium',
	fullWidth = false,
	icon,
	iconPosition = 'start',
	children,
	...rest
}: ButtonProps) => {
	const onlyIcon = !!icon && !children

	const buttonClasses = buttonStyle({
		variant,
		tone,
		size,
		fullWidth,
		onlyIcon
	})

	const content = (
		<>
			{icon && iconPosition === 'start' && icon}
			{children}
			{icon && iconPosition === 'end' && icon}
		</>
	)

	if (as === 'a') {
		const { href, target, rel, ...linkRest } = rest as LinkElement

		return (
			<a className={buttonClasses} href={href} target={target} rel={rel} {...linkRest}>
				{content}
			</a>
		)
	}

	const { type, disabled, isLoading, ...buttonRest } = rest as ButtonElementCombined

	return (
		<button type={type} className={buttonClasses} disabled={isLoading || disabled} {...buttonRest}>
			{isLoading ? <Spinner color='inherit' /> : content}
		</button>
	)
}
