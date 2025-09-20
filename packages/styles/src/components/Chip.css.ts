import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const inputStyle = style({
	display: 'none'
})

export const deleteButtonStyle = style({
	alignItems: 'center',
	backgroundColor: 'transparent',
	border: 'none',
	color: themeVars.color.text.default,
	cursor: 'pointer',
	display: 'flex',
	fontSize: vars.font.size.small,
	justifyContent: 'center'
})

export const chipStyle = recipe({
	base: {
		alignItems: 'center',
		background: 'transparent',
		borderColor: themeVars.color.border,
		borderRadius: vars.border.radii.full,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin,
		color: themeVars.color.text.default,
		display: 'inline-flex',
		fontSize: vars.font.size.small,
		gap: vars.space.xsmall,
		paddingBlock: vars.space.xsmall,
		paddingInline: vars.space.small,
		textDecoration: 'none',
		transition: 'background-color 0.3s'
	},
	variants: {
		type: {
			filter: {
				cursor: 'pointer',
				':hover': {
					backgroundColor: themeVars.color.surface.hover
				}
			},
			link: {
				cursor: 'pointer',
				':hover': {
					backgroundColor: themeVars.color.surface.hover
				}
			}
		},
		checked: {
			true: {}
		}
	},
	compoundVariants: [
		{
			variants: {
				checked: true,
				type: 'filter'
			},
			style: {
				backgroundColor: themeVars.color.accent.default,
				border: 'none',
				color: themeVars.color.text.inverse,
				':hover': {
					backgroundColor: themeVars.color.accent.hover
				}
			}
		}
	]
})
