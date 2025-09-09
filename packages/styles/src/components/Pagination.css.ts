import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const paginationStyle = style({
	alignItems: 'center',
	display: 'flex',
	gap: vars.space.small
})

export const pageButtonStyle = recipe({
	base: {
		alignItems: 'center',
		aspectRatio: '1/1',
		border: 'none',
		borderRadius: vars.border.radii.full,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		justifyContent: 'center',
		minHeight: vars.size.small,
		padding: vars.space.medium,
		transition: 'background-color 0.3s',
		':disabled': {
			color: vars.color.text.disabled,
			cursor: 'not-allowed',
			opacity: 0.5
		}
	},
	variants: {
		selected: {
			true: {
				backgroundColor: vars.color.accent.default,
				color: vars.color.surface.default,
				':disabled': {
					backgroundColor: vars.color.surface.disabled
				}
			},
			false: {
				backgroundColor: 'transparent',
				color: vars.color.text.default,
				':hover': {
					backgroundColor: vars.color.surface.soft
				}
			}
		}
	},
	defaultVariants: {
		selected: false
	}
})

export const pageTextStyle = style({
	color: vars.color.text.default,
	fontSize: vars.font.size.small
})
