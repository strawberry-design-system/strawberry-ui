import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

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
			color: themeVars.color.text.disabled,
			cursor: 'not-allowed',
			opacity: 0.5
		}
	},
	variants: {
		selected: {
			true: {
				backgroundColor: themeVars.color.accent.default,
				color: themeVars.color.surface.default,
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled
				}
			},
			false: {
				backgroundColor: 'transparent',
				color: themeVars.color.text.default,
				':hover': {
					backgroundColor: themeVars.color.surface.soft
				}
			}
		}
	},
	defaultVariants: {
		selected: false
	}
})

export const pageTextStyle = style({
	color: themeVars.color.text.default,
	fontSize: vars.font.size.small
})
