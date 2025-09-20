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

export const helperTextStyle = style({
	color: themeVars.color.text.muted,
	fontSize: vars.font.size.small
})

export const errorMessageStyle = style({
	color: themeVars.color.negative.default,
	fontSize: vars.font.size.small
})
