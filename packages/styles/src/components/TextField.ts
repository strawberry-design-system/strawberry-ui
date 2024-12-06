import { css } from '../stitches.config'

export const containerStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '$xsmall',
    variants: {
        fullWidth: {
            true: {
                width: '$full'
            }
        }
    }
})

export const labelStyle = css({
    color: '$colorNeutralPrimaryText',
    fontSize: '$medium'
})

export const requiredStyle = css({
    color: '$colorError'
})

export const textFieldStyle = css({
    backgroundColor: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$full',
    borderStyle: 'solid',
    borderWidth: '$thin',
    color: '$colorNeutralPrimaryText',
    display: 'flex',
    gap: '$medium',
    fontSize: '$small',
    outlineColor: '$colorAccent',
    paddingBlock: '$medium',
    paddingInline: '$xlarge',
    variants: {
        error: {
            true: {
                borderColor: '$colorError'
            }
        },
        fullWidth: {
            true: {
                width: '$full'
            }
        }
    },
    '&:disabled': {
        borderColor: '$colorNeutralDisabledBackground',
        color: '$colorNeutralDisabledText',
        cursor: 'not-allowed',
        opacity: 0.5
    }
})

export const helperTextStyle = css({
    color: '$colorNeutralSecondaryText',
    fontSize: '$small'
})

export const errorMessageStyle = css({
    color: '$colorError',
    fontSize: '$small'
})
