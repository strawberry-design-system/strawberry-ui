import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	fontFamily: vars.font.family.base
})

globalStyle('body', {
	backgroundColor: vars.color.surface.default,
	color: vars.color.text.default
})
