import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const textStyle = recipe({
	base: {
		color: vars.color.text.muted
	},
	variants: {
		size: {
			small: {
				fontSize: vars.font.size.xsmall
			},
			medium: {
				fontSize: vars.font.size.small
			},
			large: {
				fontSize: vars.font.size.medium
			}
		}
	}
})
