import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const tabStyle = style({
	display: 'flex'
})

export const tabLinkStyle = recipe({
	base: {
		fontSize: vars.font.size.small,
		padding: vars.space.large,
		textDecoration: 'none',
		transition: 'background-color 0.3s',
		width: vars.size.full
	},
	variants: {
		selected: {
			true: {
				borderBottomColor: themeVars.color.accent.default,
				borderBottomStyle: 'solid',
				borderBottomWidth: vars.border.width.medium,
				color: themeVars.color.text.default,
				fontWeight: vars.font.weight.bold
			},
			false: {
				color: themeVars.color.text.muted,
				hover: {
					backgroundColor: themeVars.color.surface.soft
				}
			}
		}
	}
})
