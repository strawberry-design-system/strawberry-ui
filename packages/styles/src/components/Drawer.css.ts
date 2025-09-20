import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const drawerContainerStyle = style({
	backgroundColor: themeVars.color.surface.backdrop,
	display: 'flex',
	left: 0,
	height: vars.size.full,
	position: 'fixed',
	top: 0,
	width: vars.size.full,
	zIndex: 1
})

export const drawerStyle = recipe({
	base: {
		backgroundColor: themeVars.color.surface.default,
		height: vars.size.full,
		position: 'absolute',
		width: vars.size.full
	},
	variants: {
		placement: {
			top: {
				maxHeight: vars.size.large,
				top: 0
			},
			right: {
				maxWidth: vars.size.large,
				right: 0
			},
			bottom: {
				bottom: 0,
				maxHeight: vars.size.large
			},
			left: {
				left: 0,
				maxWidth: vars.size.large
			}
		}
	}
})

export const drawerListStyle = style({
	maxHeight: vars.size.full,
	listStyle: 'none',
	overflowY: 'auto'
})

export const drawerItemStyle = style({
	display: 'flex'
})

export const drawerLinkStyle = recipe({
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
				borderLeftColor: themeVars.color.accent.default,
				borderLeftStyle: 'solid',
				borderLeftWidth: vars.border.width.medium,
				color: themeVars.color.text.default,
				fontWeight: vars.font.weight.bold
			},
			false: {
				color: themeVars.color.text.muted,
				':hover': {
					backgroundColor: themeVars.color.surface.soft
				}
			}
		}
	}
})
