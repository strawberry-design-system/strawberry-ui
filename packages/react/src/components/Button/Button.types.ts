type CommonProps = {
	variant?: 'filled' | 'outline' | 'ghost'
	tone?: 'accent' | 'neutral' | 'positive' | 'warning' | 'negative'
	size?: 'small' | 'medium' | 'large'
	iconPosition?: 'start' | 'end'
	fullWidth?: boolean
}

type IconOnly = {
	icon: React.ReactNode
	children?: never
}

type TextOnly = {
	icon?: never
	children: React.ReactNode
}

type IconAndText = {
	icon: React.ReactNode
	children: React.ReactNode
}

type ButtonElement = {
	type?: 'button' | 'submit' | 'reset'
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	isLoading?: boolean
}

type ButtonElementDefault = ButtonElement & {
	as?: undefined
}

type ButtonElementWithAs = ButtonElement & {
	as: 'button'
}

export type LinkElement = {
	as: 'a'
	href: string
	target?: '_blank' | '_self' | '_parent' | '_top' | string
	rel?: string
}

type IconOrText = IconOnly | TextOnly | IconAndText

export type ButtonElementCombined = ButtonElementDefault | ButtonElementWithAs

type ButtonOrLink = ButtonElementCombined | LinkElement

export type ButtonProps = CommonProps & IconOrText & ButtonOrLink
