import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const dividerStyle = recipe({
	variants: {
		orientation: {
			horizontal: {
				borderTopColor: vars.color.border,
				borderTopStyle: 'solid',
				borderTopWidth: vars.border.width.thin,
				width: vars.size.full
			},
			vertical: {
				borderLeftColor: vars.color.border,
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
