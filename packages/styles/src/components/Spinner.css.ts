import { recipe } from '@vanilla-extract/recipes'
import { keyframes } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

const spin = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' }
})

export const spinnerStyle = recipe({
	base: {
		borderColor: 'transparent',
		borderStyle: 'solid',
		borderWidth: vars.border.width.medium,
		borderLeftColor: themeVars.color.accent.default,
		borderRadius: '50%',
		borderRightColor: themeVars.color.accent.default,
		borderTopColor: themeVars.color.accent.default,
		display: 'flex',
		animation: `${spin} 1s linear infinite`
	},
	variants: {
		size: {
			small: { width: vars.size.xxxsmall, height: vars.size.xxxsmall },
			medium: { width: vars.size.xxsmall, height: vars.size.xxsmall },
			large: { width: vars.size.xsmall, height: vars.size.xsmall },
			xlarge: { width: vars.size.small, height: vars.size.small }
		}
	},
	defaultVariants: {
		size: 'medium'
	}
})
