import { css } from '../stitches.config'

export const buttonStyle = css({
	alignItems: 'center',
	borderRadius: '$full',
	cursor: 'pointer',
	display: 'inline-flex',
	fontWeight: '$bold',
	gap: '$xsmall',
	justifyContent: 'center',
	textDecoration: 'none',
	transition: 'background-color 0.3s',
	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.5
	},
	variants: {
		variant: {
			primary: {
				border: 'none'
			},
			secondary: {
				backgroundColor: 'transparent',
				borderStyle: 'solid',
				borderWidth: '$thin'
			},
			tertiary: {
				backgroundColor: 'transparent',
				border: 'none'
			}
		},
		tone: {
			default: {},
			negative: {},
			positive: {},
			warning: {}
		},
		size: {
			small: {
				fontSize: '$xsmall',
				paddingBlock: '$small',
				paddingInline: '$large'
			},
			medium: {
				fontSize: '$small',
				paddingBlock: '$medium',
				paddingInline: '$xlarge'
			},
			large: {
				fontSize: '$medium',
				paddingBlock: '$large',
				paddingInline: '$xxlarge'
			}
		},
		fullWidth: {
			true: {
				width: '$full'
			}
		},
		onlyIcon: {
			true: {}
		}
	},
	compoundVariants: [
		{ onlyIcon: true, size: 'small', css: { padding: '$small' } },
		{ onlyIcon: true, size: 'medium', css: { padding: '$medium' } },
		{ onlyIcon: true, size: 'large', css: { padding: '$large' } },
		{
			variant: 'primary',
			tone: 'default',
			css: {
				backgroundColor: '$colorAccent',
				color: '$colorNeutralPrimaryBackground',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorAccentHover'
				},
				'&:disabled': {
					backgroundColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'secondary',
			tone: 'default',
			css: {
				borderColor: '$colorNeutralBorder',
				color: '$colorNeutralPrimaryText',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					borderColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'tertiary',
			tone: 'default',
			css: {
				color: '$colorNeutralPrimaryText',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'primary',
			tone: 'positive',
			css: {
				backgroundColor: '$colorPositive',
				color: '$colorNeutralPrimaryBackground',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorPositiveHover'
				},
				'&:disabled': {
					backgroundColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'secondary',
			tone: 'positive',
			css: {
				backgroundColor: 'transparent',
				borderColor: '$colorPostive',
				color: '$colorPostive',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					borderColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'tertiary',
			tone: 'positive',
			css: {
				backgroundColor: 'transparent',
				color: '$colorPositive',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'primary',
			tone: 'warning',
			css: {
				backgroundColor: '$colorWarning',
				color: '$colorNeutralPrimaryBackground',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorWarningHover'
				},
				'&:disabled': {
					backgroundColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'secondary',
			tone: 'warning',
			css: {
				backgroundColor: 'transparent',
				borderColor: '$colorWarning',
				color: '$colorWarning',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					borderColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'tertiary',
			tone: 'warning',
			css: {
				backgroundColor: 'transparent',
				color: '$colorWarning',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'primary',
			tone: 'negative',
			css: {
				backgroundColor: '$colorNegative',
				color: '$colorNeutralPrimaryBackground',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNegativeHover'
				},
				'&:disabled': {
					backgroundColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'secondary',
			tone: 'negative',
			css: {
				backgroundColor: 'transparent',
				borderColor: '$colorNegative',
				color: '$colorNegative',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					borderColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			}
		},
		{
			variant: 'tertiary',
			tone: 'negative',
			css: {
				backgroundColor: 'transparent',
				color: '$colorNegative',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			}
		}
	],
	defaultVariants: {
		variant: 'primary',
		tone: 'default',
		size: 'medium',
		fullWidth: false,
		onlyIcon: false
	}
})
