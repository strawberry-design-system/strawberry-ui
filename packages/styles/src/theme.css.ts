import { createGlobalTheme } from '@vanilla-extract/css'
import border from '@strawberry-ui/tokens/border.json'
import breakpoints from '@strawberry-ui/tokens/breakpoints.json'
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
