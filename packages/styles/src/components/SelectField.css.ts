import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const selectContainerStyle = recipe({
	base: {
		position: 'relative'
	},
	variants: {
		fullWidth: {
			true: {
				width: vars.size.full
			}
		}
	},
	defaultVariants: {
		fullWidth: false
	}
})

export const selectStyle = recipe({
	base: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderColor: vars.color.border,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin,
		borderRadius: vars.border.radii.full,
		cursor: 'pointer',
		display: 'flex',
		width: vars.size.full,
		':focus-within': {
			outline: 'auto',
			outlineColor: vars.color.accent.default
		},
		':disabled': {
			borderColor: vars.color.surface.disabled,
			color: vars.color.text.disabled,
			cursor: 'not-allowed',
			opacity: 0.5
		}
	},
	variants: {
		size: {
			small: {
				fontSize: vars.font.size.xsmall,
				gap: vars.space.small,
				paddingBlock: vars.space.small,
				paddingInline: vars.space.large
			},
			medium: {
				fontSize: vars.font.size.small,
				gap: vars.space.medium,
				paddingBlock: vars.space.medium,
				paddingInline: vars.space.xlarge
			},
			large: {
				fontSize: vars.font.size.medium,
				gap: vars.space.large,
				paddingBlock: vars.space.large,
				paddingInline: vars.space.xxlarge
			}
		}
	},
	defaultVariants: {
		size: 'medium'
	}
})

export const selectLabelStyle = style({
	color: vars.color.text.default
})

export const selectPlaceholderStyle = style({
	color: vars.color.text.placeholder
})

export const selectListStyle = style({
	backgroundColor: vars.color.surface.default,
	borderRadius: vars.border.radii.xlarge,
	boxShadow: vars.shadow.medium,
	display: 'flex',
	flexDirection: 'column',
	paddingBlock: vars.space.medium,
	position: 'absolute',
	width: vars.size.full,
	zIndex: 1
})

export const selectOptionStyle = recipe({
	base: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		textAlign: 'start',
		width: vars.size.full,
		':hover': {
			backgroundColor: vars.color.surface.soft
		}
	},
	variants: {
		size: {
			small: {
				fontSize: vars.font.size.xsmall,
				gap: vars.space.small,
				padding: vars.space.small
			},
			medium: {
				fontSize: vars.font.size.small,
				gap: vars.space.medium,
				padding: vars.space.medium
			},
			large: {
				fontSize: vars.font.size.medium,
				gap: vars.space.large,
				padding: vars.space.large
			}
		},
		focused: {
			true: {
				backgroundColor: vars.color.surface.soft
			}
		}
	},
	defaultVariants: {
		size: 'medium'
	}
})

export const selectOptionLabelStyle = recipe({
	variants: {
		actived: {
			true: {
				color: vars.color.accent.default
			},
			false: {
				color: vars.color.text.default
			}
		}
	}
})

export const selectOptionPlaceholderStyle = style({
	color: vars.color.text.placeholder
})
