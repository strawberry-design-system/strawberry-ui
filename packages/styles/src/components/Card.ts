import { css } from '../stitches.config'

export const cardStyle = css({
    backgroundColor: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$xlarge',
    borderStyle: 'solid',
    borderWidth: '$thin',
    variants: {
        fullWidth: {
            true: {
                width: '$full'
            }
        }
    }
})