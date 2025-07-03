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
	variants: {
		variant: {
			primary: {
				backgroundColor: '$colorAccent',
				border: 'none',
				color: '$colorNeutralPrimaryBackground',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorAccentHover'
				},
				'&:disabled': {
					backgroundColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			},
			secondary: {
				backgroundColor: 'transparent',
				borderColor: '$colorNeutralBorder',
				borderStyle: 'solid',
				borderWidth: '$thin',
				color: '$colorNeutralPrimaryText',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					borderColor: '$colorNeutralDisabledBackground',
					color: '$colorNeutralDisabledText'
				}
			},
			tertiary: {
				backgroundColor: 'transparent',
				border: 'none',
				color: '$colorNeutralPrimaryText',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNeutralHover'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			},
			negative: {
				backgroundColor: 'transparent',
				border: 'none',
				color: '$colorNegative',
				'&:not(:disabled):hover': {
					backgroundColor: '$colorNegative',
					border: 'none',
					color: '$colorNeutralPrimaryBackground'
				},
				'&:disabled': {
					color: '$colorNeutralDisabledText'
				}
			}
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
	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.5
	},
	compoundVariants: [
		{
			onlyIcon: 'true',
			size: 'small',
			css: {
				padding: '$small'
			}
		},
		{
			onlyIcon: 'true',
			size: 'medium',
			css: {
				padding: '$medium'
			}
		},
		{
			onlyIcon: 'true',
			size: 'large',
			css: {
				padding: '$large'
			}
		}
	],
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
		fullWidth: false,
		onlyIcon: false
	}
})
