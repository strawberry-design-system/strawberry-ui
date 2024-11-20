import { createTheme } from '../stitches.config'
import colors from '@strawberry-ui/tokens/colors.json'

export const darkTheme = createTheme({
  colors: {
    colorAccent: colors.brand.mid,
    colorAccentHover: colors.brand.light,
    colorNeutralBackdrop: `${colors.white}30`,
    colorNeutralBorder: colors.gray[700],
    colorNeutralDisabledBackground: colors.gray[950],
    colorNeutralDisabledText: colors.gray[600],
    colorNeutralHover: `${colors.gray[200]}10`,
    colorNeutralPlaceholder: colors.gray[500],
    colorNeutralPrimaryBackground: colors.gray[950],
    colorNeutralSecondaryBackground: colors.gray[900],
    colorNeutralSecondaryBackgroundHover: colors.gray[800],
    colorNeutralPrimaryText: colors.gray[200],
    colorNeutralSecondaryText: colors.gray[400]
  }
})
  