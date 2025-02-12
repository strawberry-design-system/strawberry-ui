import { css } from '../stitches.config'

export const dividerStyle = css({
    variants: {
        orientation: {
            horizontal: {
                borderTopColor: '$colorNeutralBorder',
                borderTopStyle: 'solid',
                borderTopWidth: '$thin',
                width: '$full',
            },
            vertical: {
                borderLeftColor: '$colorNeutralBorder',
                borderLeftStyle: 'solid',
                borderLeftWidth: '$thin',
                height: '$full',
            },
        },
    },
    defaultVariants: {
        orientation: 'horizontal',
    },
})
