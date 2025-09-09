import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const searchBarStyle = recipe({
	base: {
		alignItems: 'center',
		borderColor: vars.color.border,
		borderRadius: vars.border.radii.full,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin,
		display: 'flex',
		gap: vars.space.medium,
		justifyContent: 'center',
		':focus-within': {
			outline: 'auto',
			outlineColor: vars.color.accent.default
		}
	},
	variants: {
		focused: {
			true: {
				paddingInline: vars.space.medium
			},
			false: {
				paddingLeft: vars.space.medium
			}
		},
		fullWidth: {
			true: {
				width: vars.size.full
			}
		}
	}
})

export const searchBarInputStyle = recipe({
	base: {
		backgroundColor: 'transparent',
		border: 'none',
		color: vars.color.text.default,
		fontSize: vars.font.size.small,
		paddingBlock: vars.space.medium,
		outline: 'none',
		width: vars.size.full
	},
	variants: {
		focused: {
			false: {
				paddingRight: vars.space.medium
			}
		}
	}
})

export const clearButtonStyle = recipe({
	base: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '50%',
		color: vars.color.text.default,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		justifyContent: 'center',
		padding: vars.space.xsmall,
		':hover': {
			backgroundColor: vars.color.surface.soft
		}
	}
})
