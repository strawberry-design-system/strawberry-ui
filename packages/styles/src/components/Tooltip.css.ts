import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const containerStyle = style({
	display: 'inline-block',
	position: 'relative'
})

export const tooltipStyle = recipe({
	base: {
		backgroundColor: vars.color.text.default,
		borderRadius: vars.border.radii.xsmall,
		color: vars.color.surface.default,
		fontSize: vars.font.size.xsmall,
		padding: vars.space.small,
		pointerEvents: 'none',
		position: 'absolute',
		transition: 'opacity 0.3s ease, visibility 0s linear 0.3s',
		whiteSpace: 'nowrap',
		zIndex: '10'
	},
	variants: {
		visible: {
			true: {
				opacity: 1,
				visibility: 'visible'
			},
			false: {
				opacity: 0,
				visibility: 'hidden'
			}
		},
		placement: {
			top: {
				bottom: '100%',
				left: '50%',
				transform: 'translateX(-50%)',
				marginBottom: vars.space.small
			},
			right: {
				top: '50%',
				left: '100%',
				transform: 'translateY(-50%)',
				marginLeft: vars.space.small
			},
			bottom: {
				top: '100%',
				left: '50%',
				transform: 'translateX(-50%)',
				marginTop: vars.space.small
			},
			left: {
				top: '50%',
				right: '100%',
				transform: 'translateY(-50%)',
				marginRight: vars.space.small
			}
		}
	}
})
