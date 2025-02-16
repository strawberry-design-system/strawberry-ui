import { css } from '../stitches.config'

export const paginationStyle = css({
    alignItems: 'center',
    display: 'flex',
    gap: '$small',
})

export const pageButtonStyle = css({
    alignItems: 'center',
    aspectRatio: '1/1',
    border: 'none',
    borderRadius: '$full',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$small',
    justifyContent: 'center',
    minHeight: '$small',
    padding: '$medium',
    transition: 'background-color 0.3s',
    '&:disabled': {
        color: '$colorNeutralDisabledText',
        cursor: 'not-allowed',
        opacity: 0.5,
    },
    variants: {
        selected: {
            true: {
                backgroundColor: '$colorAccent',
                color: '$colorNeutralPrimaryBackground',
                '&:disabled': {
                    backgroundColor: '$colorNeutralDisabledBackground',
                },
            },
            false: {
                backgroundColor: 'transparent',
                color: '$colorNeutralPrimaryText',
                '&:not(:disabled):hover': {
                    backgroundColor: '$colorNeutralHover',
                },
            },
        },
    },
    defaultVariants: {
        selected: false,
    },
})

export const pageTextStyle = css({
    color: '$colorNeutralPrimaryText',
    fontSize: '$small',
})
