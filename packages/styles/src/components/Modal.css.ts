import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const modalContainerStyle = style({
	height: vars.size.full,
	left: 0,
	overflowY: 'auto',
	position: 'fixed',
	top: 0,
	width: vars.size.full,
	zIndex: 1
})

export const backdropStyle = style({
	alignItems: 'center',
	backgroundColor: vars.color.surface.backdrop,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	left: 0,
	minHeight: vars.size.full,
	padding: vars.space.xxlarge,
	position: 'absolute',
	top: 0,
	width: vars.size.full
})

export const modalStyle = style({
	backgroundColor: vars.color.surface.default,
	borderRadius: vars.border.radii.xlarge,
	maxWidth: vars.size.xlarge,
	position: 'relative',
	width: vars.size.full
})
