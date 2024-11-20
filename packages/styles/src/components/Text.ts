import { css } from '../stitches.config'

export const textStyle = css({
    color: '$colorNeutralSecondaryText',
    variants: {
        size: {
            small: {
                fontSize: '$xsmall'
            },
            medium: {
                fontSize: '$small'
            },
            large: {
                fontSize: '$medium'
            }
        }
    }
})