import { createStitches } from '@stitches/core'
import border from '@strawberry-ui/tokens/border.json'
import breakpoints from '@strawberry-ui/tokens/breakpoints.json'
import colors from '@strawberry-ui/tokens/colors.json'
import shadows from '@strawberry-ui/tokens/shadows.json'
import sizes from '@strawberry-ui/tokens/sizes.json'
import spacing from '@strawberry-ui/tokens/spacing.json'
import typography from '@strawberry-ui/tokens/typography.json'

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			colorAccent: colors.brand.dark,
			colorAccentHover: colors.brand.low,
			colorAccentSoft: `${colors.brand.dark}20`,
			colorNegative: colors.negative,
			colorPositive: colors.positive,
			colorWarning: colors.warning,
			colorNeutralBackdrop: `${colors.black}30`,
			colorNeutralBorder: colors.gray[300],
			colorNeutralDisabledBackground: colors.gray[400],
			colorNeutralDisabledText: colors.gray[800],
			colorNeutralHover: `${colors.gray[800]}10`,
			colorNeutralPlaceholder: colors.gray[500],
			colorNeutralPrimaryBackground: colors.white,
			colorNeutralSecondaryBackground: colors.gray[50],
			colorNeutralSecondaryBackgroundHover: colors.gray[200],
			colorNeutralPrimaryText: colors.gray[800],
			colorNeutralSecondaryText: colors.gray[600]
		},
		space: spacing,
		fontSizes: typography.fontSizes,
		fonts: typography.fontFamily,
		fontWeights: typography.fontWeight,
		lineHeights: typography.lineHeight,
		sizes: sizes,
		borderWidths: border.widths,
		borderStyles: border.style,
		radii: border.radius,
		shadows: shadows,
		media: {
			mobile: `(min-width: ${breakpoints.mobile})`,
			tablet: `(min-width: ${breakpoints.tablet})`,
			desktop: `(min-width: ${breakpoints.desktop})`,
			largeDesktop: `(min-width: ${breakpoints.largeDesktop})`
		}
	}
})
