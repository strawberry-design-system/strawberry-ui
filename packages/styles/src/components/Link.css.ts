import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const linkStyle = style({
	color: vars.color.accent.default,
	cursor: 'pointer',
	fontSize: vars.font.size.small,
	textDecoration: 'none',
	':hover': {
		color: vars.color.accent.hover,
		textDecoration: 'underline'
	}
})
