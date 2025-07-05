import { css } from '../stitches.config'

export const labelStyle = css({
	alignItems: 'center',
	color: '$colorNeutralPrimaryText',
	cursor: 'pointer',
	display: 'flex',
	fontSize: '$small',
	gap: '$xsmall',
	variants: {
		disabled: {
			true: {
				color: 'colorNeutralDisabledText',
				cursor: 'not-allowed',
				opacity: 0.5
			}
		}
	}
})

export const inputStyle = css({
	display: 'none'
})

export const switchStyle = css({
	aspectRatio: '2/1',
	borderRadius: '$full',
	display: 'flex',
	height: '$xxsmall',
	position: 'relative',
	transition: 'background-color 0.3s ease',
	'&::after': {
		aspectRatio: '1/1',
		backgroundColor: '$colorNeutralPrimaryBackground',
		borderRadius: '$full',
		boxShadow: '$small',
		content: '',
		fontSize: '$xsmall',
		height: '85%',
		left: '5%',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)'
	},
	variants: {
		checked: {
			true: {
				backgroundColor: '$colorAccent',
				'&::after': {
					left: 'unset',
					right: '5%'
				}
			},
			false: {
				backgroundColor: '$colorNeutralSecondaryBackground'
			}
		},
		disabled: {
			true: {
				borderColor: '$colorNeutralDisabledBackground',
				'&::after': {
					backgroundColor: '$colorNeutralDisabledText'
				}
			}
		}
	},
	compoundVariants: [
		{
			disabled: 'true',
			checked: 'true',
			css: {
				backgroundColor: '$colorNeutralDisabledBackground'
			}
		}
	]
})
