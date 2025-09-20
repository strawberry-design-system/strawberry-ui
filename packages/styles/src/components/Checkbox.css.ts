import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const labelStyle = recipe({
	base: {
		alignItems: 'center',
		color: themeVars.color.text.default,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		gap: vars.space.xsmall
	},
	variants: {
		disabled: {
			true: {
				color: themeVars.color.text.disabled,
				cursor: 'not-allowed',
				opacity: 0.5
			}
		}
	}
})

export const inputStyle = style({
	display: 'none'
})

export const checkboxStyle = recipe({
	base: {
		borderRadius: vars.border.radii.small,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin,
		display: 'flex',
		height: vars.size.xxxsmall,
		position: 'relative',
		transition: 'background-color 0.3s ease, border 0.3s ease',
		width: vars.size.xxxsmall
	},
	variants: {
		checked: {
			true: {
				backgroundColor: themeVars.color.accent.default,
				border: themeVars.color.accent.default,
				':after': {
					color: themeVars.color.text.inverse,
					content: '✔',
					fontSize: vars.font.size.xsmall,
					left: '50%',
					position: 'absolute',
					top: '50%',
					transform: 'translate(-50%, -50%)'
				}
			},
			false: {
				backgroundColor: 'transparent',
				borderColor: themeVars.color.border
			}
		},
		disabled: {
			true: {
				borderColor: themeVars.color.surface.disabled
			}
		}
	},
	compoundVariants: [
		{
			variants: {
				disabled: true,
				checked: true
			},
			style: {
				backgroundColor: themeVars.color.surface.disabled
			}
		}
	]
})
