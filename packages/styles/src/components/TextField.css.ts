import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const containerStyle = recipe({
	base: {
		display: 'flex',
		flexDirection: 'column',
		gap: vars.space.xsmall
	},
	variants: {
		fullWidth: {
			true: {
				width: vars.size.full
			}
		}
	}
})

export const labelStyle = style({
	color: themeVars.color.text.default,
	fontSize: vars.font.size.medium
})

export const requiredStyle = style({
	color: themeVars.color.negative.default
})

export const textFieldStyle = recipe({
	base: {
		backgroundColor: 'transparent',
		borderColor: themeVars.color.border,
		borderRadius: vars.border.radii.full,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin,
		color: themeVars.color.text.default,
		display: 'flex',
		gap: vars.space.medium,
		fontSize: vars.font.size.small,
		outlineColor: themeVars.color.accent.default,
		paddingBlock: vars.space.medium,
		paddingInline: vars.space.xlarge,
		':disabled': {
			borderColor: themeVars.color.surface.disabled,
			color: themeVars.color.text.disabled,
			cursor: 'not-allowed',
			opacity: 0.5
		}
	},
	variants: {
		error: {
			true: {
				borderColor: themeVars.color.negative.default
			}
		},
		fullWidth: {
			true: {
				width: vars.size.full
			}
		}
	}
})

export const helperTextStyle = style({
	color: themeVars.color.text.muted,
	fontSize: vars.font.size.small
})

export const errorMessageStyle = style({
	color: themeVars.color.negative.default,
	fontSize: vars.font.size.small
})
