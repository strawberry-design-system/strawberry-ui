import { css } from '../stitches.config'

export const containerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '$xsmall',
	variants: {
		fullWidth: {
			true: {
				width: '$full'
			}
		}
	}
})

export const labelStyle = css({
	color: '$colorNeutralPrimaryText',
	fontSize: '$medium'
})

export const requiredStyle = css({
	color: '$colorNegative'
})

export const helperTextStyle = css({
	color: '$colorNeutralSecondaryText',
	fontSize: '$small'
})

export const errorMessageStyle = css({
	color: '$colorNegative',
	fontSize: '$small'
})
