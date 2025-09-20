import { recipe } from '@vanilla-extract/recipes'
import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const labelStyle = recipe({
	base: {
		alignItems: 'center',
		color: themeVars.color.text.default,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		gap: vars.space.xsmall
	},
	variants: {
		disabled: {
			true: {
				color: themeVars.color.text.disabled,
				cursor: 'not-allowed',
				opacity: 0.5
			}
		}
	}
})

export const radioButtonStyle = style({
	appearance: 'none',
	backgroundColor: 'transparent',
	borderColor: themeVars.color.border,
	borderRadius: vars.border.radii.full,
	borderStyle: 'solid',
	borderWidth: vars.border.width.thin,
	display: 'flex',
	height: vars.size.xxxsmall,
	position: 'relative',
	transition: 'background-color 0.3s ease, border 0.3s ease',
	width: vars.size.xxxsmall
})

globalStyle(`${radioButtonStyle}:disabled`, {
	borderColor: themeVars.color.surface.disabled
})

globalStyle(`${radioButtonStyle}:checked`, {
	borderColor: themeVars.color.accent.default
})

globalStyle(`${radioButtonStyle}:checked::after`, {
	backgroundColor: themeVars.color.accent.default,
	borderRadius: vars.border.radii.full,
	content: '""',
	fontSize: vars.font.size.xsmall,
	height: '65%',
	left: '50%',
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	width: '65%'
})

globalStyle(`${radioButtonStyle}:checked:disabled::after`, {
	backgroundColor: themeVars.color.surface.disabled
})
