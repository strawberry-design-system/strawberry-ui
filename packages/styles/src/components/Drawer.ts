import { css } from '../stitches.config'

export const drawerContainerStyle = css({
	backgroundColor: '$colorNeutralBackdrop',
	display: 'flex',
	left: 0,
	height: '$full',
	position: 'fixed',
	top: 0,
	width: '$full',
	zIndex: 1
})

export const drawerStyle = css({
	backgroundColor: '$colorNeutralPrimaryBackground',
	height: '$full',
	position: 'absolute',
	width: '$full',
	variants: {
		placement: {
			top: {
				maxHeight: '$large',
				top: 0
			},
			right: {
				maxWidth: '$large',
				right: 0
			},
			bottom: {
				bottom: 0,
				maxHeight: '$large'
			},
			left: {
				left: 0,
				maxWidth: '$large'
			}
		}
	}
})

export const drawerListStyle = css({
	maxHeight: '$full',
	listStyle: 'none',
	overflowY: 'auto'
})

export const drawerItemStyle = css({
	display: 'flex'
})

export const drawerLinkStyle = css({
	fontSize: '$small',
	padding: '$large',
	textDecoration: 'none',
	transition: 'background-color 0.3s',
	width: '$full',
	variants: {
		selected: {
			true: {
				borderLeftColor: '$colorAccent',
				borderLeftStyle: 'solid',
				borderLeftWidth: '$medium',
				color: '$colorNeutralPrimaryText',
				fontWeight: '$bold'
			},
			false: {
				color: '$colorNeutralSecondaryText',
				'&:hover': {
					backgroundColor: '$colorNeutralHover'
				}
			}
		}
	}
})
