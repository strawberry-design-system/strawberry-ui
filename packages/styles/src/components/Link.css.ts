import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const linkStyle = style({
	color: themeVars.color.accent.default,
	cursor: 'pointer',
	fontSize: vars.font.size.small,
	textDecoration: 'none',
	':hover': {
		color: themeVars.color.accent.hover,
		textDecoration: 'underline'
	}
})
