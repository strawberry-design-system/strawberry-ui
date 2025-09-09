import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const cardStyle = recipe({
	base: {
		backgroundColor: 'transparent',
		borderColor: vars.color.border,
		borderRadius: vars.border.radii.xlarge,
		borderStyle: 'solid',
		borderWidth: vars.border.width.thin
	},
	variants: {
		fullWidth: {
			true: {
				width: vars.size.full
			}
		}
	}
})
