import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'
import { themeVars } from './contract.css'

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	fontFamily: vars.font.family.base
})

globalStyle('body', {
	backgroundColor: themeVars.color.surface.default,
	color: themeVars.color.text.default
})
