import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const labelStyle = recipe({
	base: {
		alignItems: 'center',
		color: vars.color.text.default,
		cursor: 'pointer',
		display: 'flex',
		fontSize: vars.font.size.small,
		gap: vars.space.xsmall
	},
	variants: {
		disabled: {
			true: {
				color: vars.color.text.disabled,
				cursor: 'not-allowed',
				opacity: 0.5
			}
		}
	}
})

export const inputStyle = style({
	display: 'none'
})

export const switchStyle = recipe({
	base: {
		aspectRatio: '2/1',
		borderRadius: vars.border.radii.full,
		display: 'flex',
		height: vars.size.xxsmall,
		position: 'relative',
		transition: 'background-color 0.3s ease',
		':after': {
			aspectRatio: '1/1',
			backgroundColor: vars.color.surface.default,
			borderRadius: vars.border.radii.full,
			boxShadow: vars.shadow.small,
			content: '',
			fontSize: vars.font.size.xsmall,
			height: '85%',
			left: '5%',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)'
		}
	},
	variants: {
		checked: {
			true: {
				backgroundColor: vars.color.accent.default,
				':after': {
					left: 'unset',
					right: '5%'
				}
			},
			false: {
				backgroundColor: vars.color.surface.muted
			}
		},
		disabled: {
			true: {
				borderColor: vars.color.surface.disabled,
				':after': {
					backgroundColor: vars.color.surface.disabled
				}
			}
		}
	},
	compoundVariants: [
		{
			variants: {
				disabled: true,
				checked: true
			},
			style: {
				backgroundColor: vars.color.surface.disabled
			}
		}
	]
})
