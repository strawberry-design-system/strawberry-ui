import { css } from '../stitches.config'

export const headingStyle = css({
    color: '$colorNeutralPrimaryText',
    fontWeight: 'bold',
    variants: {
        size: {
            xsmall: {
                fontSize: '$xsmall'
            },
            small: {
                fontSize: '$small'
            },
            medium: {
                fontSize: '$medium'
            },
            large: {
                fontSize: '$large'
            },
            xlarge: {
                fontSize: '$xlarge'
            }
        }
    }
})