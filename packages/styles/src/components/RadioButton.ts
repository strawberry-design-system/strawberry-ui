import { css } from '../stitches.config'

export const labelStyle = css({
    alignItems: 'center',
    color: '$colorNeutralPrimaryText',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$small',
    gap: '$xsmall',
    variants: {
        disabled: {
            true: {
                color: 'colorNeutralDisabledText',
                cursor: 'not-allowed',
                opacity: 0.5,
            },
        },
    },
})

export const radioButtonStyle = css({
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$full',
    borderStyle: 'solid',
    borderWidth: '$thin',
    display: 'flex',
    height: '$xxxsmall',
    position: 'relative',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    width: '$xxxsmall',
    '&:checked': {
        borderColor: '$colorAccent',
        '&::after': {
            backgroundColor: '$colorAccent',
            borderRadius: '$full',
            content: '',
            fontSize: '$xsmall',
            height: '65%',
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '65%',
        },
    },
    '&:disabled': {
        borderColor: '$colorNeutralDisabledBackground',
        '&:checked::after': {
            backgroundColor: '$colorNeutralDisabledBackground',
        },
    },
})
