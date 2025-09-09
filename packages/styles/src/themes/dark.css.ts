import { createTheme } from '@vanilla-extract/css'
import colors from '@strawberry-ui/tokens/colors.json'

export const darkTheme = createTheme({
	color: {
		accent: {
			default: colors.brand.mid,
			hover: colors.brand.light,
			soft: `${colors.brand.mid}20`
		},
		negative: {
			default: colors.negative.mid,
			hover: colors.negative.light,
			soft: `${colors.negative.mid}20`
		},
		positive: {
			default: colors.positive.mid,
			hover: colors.positive.light,
			soft: `${colors.positive.mid}20`
		},
		warning: {
			default: colors.warning.mid,
			hover: colors.warning.light,
			soft: `${colors.warning.mid}20`
		},
		information: {
			default: colors.information.mid,
			hover: colors.information.light,
			soft: `${colors.information.mid}20`
		},
		border: colors.gray[600],
		surface: {
			backdrop: `${colors.white}30`,
			default: colors.gray[950],
			disabled: colors.gray[700],
			hover: colors.gray[700],
			muted: colors.gray[900],
			soft: `${colors.gray[100]}10`
		},
		text: {
			default: colors.gray[50],
			disabled: colors.gray[400],
			muted: colors.gray[300],
			placeholder: colors.gray[400]
		}
	}
})
