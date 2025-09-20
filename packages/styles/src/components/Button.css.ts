import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'
import { themeVars } from '../contract.css'

export const buttonStyle = recipe({
	base: {
		alignItems: 'center',
		borderRadius: vars.border.radii.full,
		cursor: 'pointer',
		display: 'inline-flex',
		fontWeight: vars.font.weight.bold,
		gap: vars.space.small,
		justifyContent: 'center',
		textDecoration: 'none',
		transition: 'background-color 0.3s',
		':disabled': {
			cursor: 'not-allowed',
			opacity: 0.5
		}
	},
	variants: {
		variant: {
			filled: {
				border: 'none'
			},
			outline: {
				backgroundColor: 'transparent',
				borderStyle: 'solid',
				borderWidth: vars.border.width.thin
			},
			ghost: {
				backgroundColor: 'transparent',
				border: 'none'
			}
		},
		tone: {
			accent: {},
			neutral: {},
			negative: {},
			positive: {},
			warning: {}
		},
		size: {
			small: {
				fontSize: vars.font.size.xsmall,
				paddingBlock: vars.space.small,
				paddingInline: vars.space.large
			},
			medium: {
				fontSize: vars.font.size.small,
				paddingBlock: vars.space.medium,
				paddingInline: vars.space.xlarge
			},
			large: {
				fontSize: vars.font.size.medium,
				paddingBlock: vars.space.large,
				paddingInline: vars.space.xxlarge
			}
		},
		fullWidth: {
			true: {
				width: vars.size.full
			}
		},
		onlyIcon: {
			true: {}
		}
	},
	compoundVariants: [
		{
			variants: {
				onlyIcon: true,
				size: 'small'
			},
			style: {
				padding: vars.space.small
			}
		},
		{
			variants: {
				onlyIcon: true,
				size: 'medium'
			},
			style: {
				padding: vars.space.medium
			}
		},
		{
			variants: {
				onlyIcon: true,
				size: 'large'
			},
			style: {
				padding: vars.space.large
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'accent'
			},
			style: {
				backgroundColor: themeVars.color.accent.default,
				color: themeVars.color.surface.default,
				':hover': {
					backgroundColor: themeVars.color.accent.hover
				},
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'accent'
			},
			style: {
				borderColor: themeVars.color.accent.default,
				color: themeVars.color.accent.default,
				':hover': {
					backgroundColor: themeVars.color.accent.soft
				},
				':disabled': {
					borderColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'accent'
			},
			style: {
				color: themeVars.color.accent.default,
				':hover': {
					backgroundColor: themeVars.color.accent.soft
				},
				':disabled': {
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'neutral'
			},
			style: {
				backgroundColor: themeVars.color.surface.muted,
				color: themeVars.color.text.default,
				':hover': {
					backgroundColor: themeVars.color.surface.hover
				},
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'neutral'
			},
			style: {
				borderColor: themeVars.color.border,
				color: themeVars.color.text.default,
				':hover': {
					backgroundColor: themeVars.color.surface.soft
				},
				':disabled': {
					borderColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'neutral'
			},
			style: {
				color: themeVars.color.text.default,
				':hover': {
					backgroundColor: themeVars.color.surface.soft
				},
				':disabled': {
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'positive'
			},
			style: {
				backgroundColor: themeVars.color.positive.default,
				color: themeVars.color.surface.default,
				':hover': {
					backgroundColor: themeVars.color.positive.hover
				},
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'positive'
			},
			style: {
				backgroundColor: 'transparent',
				borderColor: themeVars.color.positive.default,
				color: themeVars.color.positive.default,
				':hover': {
					backgroundColor: themeVars.color.positive.soft
				},
				':disabled': {
					borderColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'positive'
			},
			style: {
				backgroundColor: 'transparent',
				color: themeVars.color.positive.default,
				':hover': {
					backgroundColor: themeVars.color.positive.soft
				},
				':disabled': {
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'warning'
			},
			style: {
				backgroundColor: themeVars.color.warning.default,
				color: themeVars.color.surface.default,
				':hover': {
					backgroundColor: themeVars.color.warning.hover
				},
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'warning'
			},
			style: {
				backgroundColor: 'transparent',
				borderColor: themeVars.color.warning.default,
				color: themeVars.color.warning.default,
				':hover': {
					backgroundColor: themeVars.color.warning.soft
				},
				':disabled': {
					borderColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'warning'
			},
			style: {
				backgroundColor: 'transparent',
				color: themeVars.color.warning.default,
				':hover': {
					backgroundColor: themeVars.color.warning.soft
				},
				':disabled': {
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'negative'
			},
			style: {
				backgroundColor: themeVars.color.negative.default,
				color: themeVars.color.surface.default,
				':hover': {
					backgroundColor: themeVars.color.negative.hover
				},
				':disabled': {
					backgroundColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'negative'
			},
			style: {
				backgroundColor: 'transparent',
				borderColor: themeVars.color.negative.default,
				color: themeVars.color.negative.default,
				':hover': {
					backgroundColor: themeVars.color.negative.soft
				},
				':disabled': {
					borderColor: themeVars.color.surface.disabled,
					color: themeVars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'negative'
			},
			style: {
				backgroundColor: 'transparent',
				color: themeVars.color.negative.default,
				':hover': {
					backgroundColor: themeVars.color.negative.soft
				},
				':disabled': {
					color: themeVars.color.text.disabled
				}
			}
		}
	],
	defaultVariants: {
		variant: 'filled',
		tone: 'accent',
		size: 'medium',
		fullWidth: false,
		onlyIcon: false
	}
})
