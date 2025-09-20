import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const dividerStyle = recipe({
	variants: {
		orientation: {
			horizontal: {
				borderTopColor: themeVars.color.border,
				borderTopStyle: 'solid',
				borderTopWidth: vars.border.width.thin,
				width: vars.size.full
			},
			vertical: {
				borderLeftColor: themeVars.color.border,
				borderLeftStyle: 'solid',
				borderLeftWidth: vars.border.width.thin,
				height: vars.size.full
			}
		}
	},
	defaultVariants: {
		orientation: 'horizontal'
	}
})
