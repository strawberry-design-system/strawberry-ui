import { createTheme } from '../stitches.config'
import colors from '@strawberry-ui/tokens/colors.json'

export const darkTheme = createTheme({
    colors: {
        colorAccent: colors.brand.mid,
        colorAccentHover: colors.brand.light,
        colorNeutralBackdrop: `${colors.white}30`,
        colorNeutralBorder: colors.gray[600],
        colorNeutralDisabledBackground: colors.gray[900],
        colorNeutralDisabledText: colors.gray[500],
        colorNeutralHover: `${colors.gray[100]}10`,
        colorNeutralPlaceholder: colors.gray[400],
        colorNeutralPrimaryBackground: colors.gray[950],
        colorNeutralSecondaryBackground: colors.gray[800],
        colorNeutralSecondaryBackgroundHover: colors.gray[700],
        colorNeutralPrimaryText: colors.gray[100],
        colorNeutralSecondaryText: colors.gray[300]
    }
})
