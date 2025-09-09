import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const labelStyle = recipe({
	base: {
		alignItems: 'center',
		color: vars.color.text.default,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		gap: vars.space.xsmall
	},
	variants: {
		disabled: {
			true: {
				color: vars.color.text.disabled,
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
				backgroundColor: vars.color.accent.default,
				border: vars.color.accent.default,
				':after': {
					color: vars.color.text.inverse,
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
				borderColor: vars.color.border
			}
		},
		disabled: {
			true: {
				borderColor: vars.color.surface.disabled
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
				backgroundColor: vars.color.surface.disabled
			}
		}
	]
})
