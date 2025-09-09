import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const headingStyle = recipe({
	base: {
		color: vars.color.text.default,
		fontWeight: vars.font.weight.extrabold
	},
	variants: {
		size: {
			xsmall: {
				fontSize: vars.font.size.xsmall
			},
			small: {
				fontSize: vars.font.size.small
			},
			medium: {
				fontSize: vars.font.size.medium
			},
			large: {
				fontSize: vars.font.size.large
			},
			xlarge: {
				fontSize: vars.font.size.xlarge
			},
			xxlarge: {
				fontSize: vars.font.size.xxlarge
			},
			xxxlarge: {
				fontSize: vars.font.size.xxxlarge
			}
		}
	}
})
