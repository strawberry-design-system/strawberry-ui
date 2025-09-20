import { recipe } from '@vanilla-extract/recipes'
import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

const circularIndeterminate = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' }
})

export const circularStyle = recipe({
	base: {
		alignItems: 'center',
		aspectRatio: '1/1',
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		width: vars.size.medium,
		':before': {
			backgroundColor: themeVars.color.surface.default,
			borderRadius: '50%',
			content: '',
			height: '85%',
			position: 'absolute',
			width: '85%'
		}
	},
	variants: {
		variant: {
			primary: {
				background: `conic-gradient(${themeVars.color.accent.default} var(--cirlce-gradient-degree), ${themeVars.color.surface.muted} 0deg)`
			},
			success: {
				background: `conic-gradient(${themeVars.color.positive.default} var(--cirlce-gradient-degree), ${themeVars.color.surface.muted} 0deg)`
			},
			warning: {
				background: `conic-gradient(${themeVars.color.warning.default} var(--cirlce-gradient-degree), ${themeVars.color.surface.muted} 0deg)`
			},
			error: {
				background: `conic-gradient(${themeVars.color.negative.default} var(--cirlce-gradient-degree), ${themeVars.color.surface.muted} 0deg)`
			}
		},
		indeterminate: {
			true: {
				animation: `${circularIndeterminate} 1s linear infinite`
			}
		}
	}
})

export const circularInnerStyle = style({
	position: 'relative'
})

export const linearContainerStyle = style({
	alignItems: 'center',
	display: 'flex',
	gap: vars.space.xsmall
})

const linearIndeterminate = keyframes({
	'0%': { transform: 'translateX(-50%)' },
	'100%': { transform: 'translateX(200%)' }
})

export const linearStyle = recipe({
	base: {
		backgroundColor: themeVars.color.surface.muted,
		height: '8px',
		overflow: 'hidden',
		width: vars.size.full
	},
	variants: {
		fullWidth: {
			true: {
				width: vars.size.full
			},
			false: {
				borderRadius: vars.border.radii.full,
				maxWidth: vars.size.large
			}
		}
	}
})

export const linearInnerStyle = recipe({
	base: {
		display: 'block',
		height: '$full',
		transition: 'width 0.3s'
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: '$colorAccent'
			},
			success: {
				backgroundColor: '$colorPositive'
			},
			warning: {
				backgroundColor: '$colorWarning'
			},
			error: {
				backgroundColor: '$colorNegative'
			}
		},
		indeterminate: {
			true: {
				animation: `${linearIndeterminate} 1s linear infinite`
			}
		},
		fullWidth: {
			false: {
				borderRadius: '$full'
			}
		}
	}
})
