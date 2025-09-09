import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

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
				backgroundColor: vars.color.accent.default,
				color: vars.color.surface.default,
				':hover': {
					backgroundColor: vars.color.accent.hover
				},
				':disabled': {
					backgroundColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'accent'
			},
			style: {
				borderColor: vars.color.accent.default,
				color: vars.color.accent.default,
				':hover': {
					backgroundColor: vars.color.accent.soft
				},
				':disabled': {
					borderColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'accent'
			},
			style: {
				color: vars.color.accent.default,
				':hover': {
					backgroundColor: vars.color.accent.soft
				},
				':disabled': {
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'neutral'
			},
			style: {
				backgroundColor: vars.color.surface.muted,
				color: vars.color.text.default,
				':hover': {
					backgroundColor: vars.color.surface.hover
				},
				':disabled': {
					backgroundColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'outline',
				tone: 'neutral'
			},
			style: {
				borderColor: vars.color.border,
				color: vars.color.text.default,
				':hover': {
					backgroundColor: vars.color.surface.soft
				},
				':disabled': {
					borderColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'ghost',
				tone: 'neutral'
			},
			style: {
				color: vars.color.text.default,
				':hover': {
					backgroundColor: vars.color.surface.soft
				},
				':disabled': {
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'positive'
			},
			style: {
				backgroundColor: vars.color.positive.default,
				color: vars.color.surface.default,
				':hover': {
					backgroundColor: vars.color.positive.hover
				},
				':disabled': {
					backgroundColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				borderColor: vars.color.positive.default,
				color: vars.color.positive.default,
				':hover': {
					backgroundColor: vars.color.positive.soft
				},
				':disabled': {
					borderColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				color: vars.color.positive.default,
				':hover': {
					backgroundColor: vars.color.positive.soft
				},
				':disabled': {
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'warning'
			},
			style: {
				backgroundColor: vars.color.warning.default,
				color: vars.color.surface.default,
				':hover': {
					backgroundColor: vars.color.warning.hover
				},
				':disabled': {
					backgroundColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				borderColor: vars.color.warning.default,
				color: vars.color.warning.default,
				':hover': {
					backgroundColor: vars.color.warning.soft
				},
				':disabled': {
					borderColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				color: vars.color.warning.default,
				':hover': {
					backgroundColor: vars.color.warning.soft
				},
				':disabled': {
					color: vars.color.text.disabled
				}
			}
		},
		{
			variants: {
				variant: 'filled',
				tone: 'negative'
			},
			style: {
				backgroundColor: vars.color.negative.default,
				color: vars.color.surface.default,
				':hover': {
					backgroundColor: vars.color.negative.hover
				},
				':disabled': {
					backgroundColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				borderColor: vars.color.negative.default,
				color: vars.color.negative.default,
				':hover': {
					backgroundColor: vars.color.negative.soft
				},
				':disabled': {
					borderColor: vars.color.surface.disabled,
					color: vars.color.text.disabled
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
				color: vars.color.negative.default,
				':hover': {
					backgroundColor: vars.color.negative.soft
				},
				':disabled': {
					color: vars.color.text.disabled
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
