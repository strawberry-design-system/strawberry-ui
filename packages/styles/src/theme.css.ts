import { createGlobalTheme } from '@vanilla-extract/css'
import border from '@strawberry-ui/tokens/border.json'
import breakpoints from '@strawberry-ui/tokens/breakpoints.json'
import colors from '@strawberry-ui/tokens/colors.json'
import shadows from '@strawberry-ui/tokens/shadows.json'
import sizes from '@strawberry-ui/tokens/sizes.json'
import spacing from '@strawberry-ui/tokens/spacing.json'
import typography from '@strawberry-ui/tokens/typography.json'

export const vars = createGlobalTheme(':root', {
	border: {
		radii: border.radius,
		styles: border.style,
		width: border.widths
	},
	color: {
		accent: {
			default: colors.brand.dark,
			hover: colors.brand.low,
			soft: `${colors.brand.dark}20`
		},
		negative: {
			default: colors.negative.dark,
			hover: colors.negative.low,
			soft: `${colors.negative.dark}20`
		},
		positive: {
			default: colors.positive.dark,
			hover: colors.positive.low,
			soft: `${colors.positive.dark}20`
		},
		warning: {
			default: colors.warning.dark,
			hover: colors.warning.low,
			soft: `${colors.warning.dark}20`
		},
		information: {
			default: colors.information.dark,
			hover: colors.information.low,
			soft: `${colors.information.dark}20`
		},
		border: colors.gray[300],
		surface: {
			backdrop: `${colors.black}30`,
			default: colors.white,
			disabled: colors.gray[400],
			hover: colors.gray[200],
			muted: colors.gray[50],
			soft: `${colors.gray[800]}10`
		},
		text: {
			default: colors.gray[800],
			disabled: colors.gray[800],
			inverse: colors.white,
			muted: colors.gray[600],
			placeholder: colors.gray[500]
		}
	},
	font: {
		family: typography.fontFamily,
		lineHeight: typography.lineHeight,
		size: typography.fontSizes,
		weight: typography.fontWeight
	},
	media: {
		mobile: `(min-width: ${breakpoints.mobile})`,
		tablet: `(min-width: ${breakpoints.tablet})`,
		desktop: `(min-width: ${breakpoints.desktop})`,
		largeDesktop: `(min-width: ${breakpoints.largeDesktop})`
	},
	size: sizes,
	shadow: shadows,
	space: spacing
})
