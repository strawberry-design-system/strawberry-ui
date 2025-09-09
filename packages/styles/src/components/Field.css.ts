import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

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
	color: vars.color.text.default,
	fontSize: vars.font.size.medium
})

export const requiredStyle = style({
	color: vars.color.negative.default
})

export const helperTextStyle = style({
	color: vars.color.text.muted,
	fontSize: vars.font.size.small
})

export const errorMessageStyle = style({
	color: vars.color.negative.default,
	fontSize: vars.font.size.small
})
