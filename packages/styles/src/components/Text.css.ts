import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const textStyle = recipe({
	base: {
		color: themeVars.color.text.muted
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
