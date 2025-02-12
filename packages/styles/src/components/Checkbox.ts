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

export const inputStyle = css({
    display: 'none',
})

export const checkboxStyle = css({
    borderRadius: '$small',
    borderStyle: 'solid',
    borderWidth: '$thin',
    display: 'flex',
    height: '$xxxsmall',
    position: 'relative',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    width: '$xxxsmall',
    variants: {
        checked: {
            true: {
                backgroundColor: '$colorAccent',
                border: '$colorAccent',
                '&::after': {
                    color: '$colorNeutralPrimaryBackground',
                    content: '✔',
                    fontSize: '$xsmall',
                    left: '50%',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                },
            },
            false: {
                backgroundColor: 'transparent',
                borderColor: '$colorNeutralBorder',
            },
        },
        disabled: {
            true: {
                borderColor: '$colorNeutralDisabledBackground',
            },
        },
    },
    compoundVariants: [
        {
            disabled: 'true',
            checked: 'true',
            css: {
                backgroundColor: '$colorNeutralDisabledBackground',
            },
        },
    ],
})
