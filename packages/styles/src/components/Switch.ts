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

export const switchStyle = css({
    aspectRatio: '2/1',
    borderRadius: '$full',
    borderStyle: 'solid',
    borderWidth: '$thin',
    display: 'flex',
    height: '$xxsmall',
    position: 'relative',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    '&::after': {
        aspectRatio: '1/1',
        borderRadius: '$full',
        boxShadow: '$medium',
        content: '',
        fontSize: '$xsmall',
        height: '85%',
        left: '5%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'left 0.3s ease, right 0.3s ease',
    },
    variants: {
        checked: {
            true: {
                backgroundColor: '$colorAccent',
                borderColor: '$colorAccent',
                '&::after': {
                    backgroundColor: '$colorNeutralPrimaryBackground',
                    left: 'unset',
                    right: '5%',
                },
            },
            false: {
                backgroundColor: 'transparent',
                borderColor: '$colorNeutralBorder',
                '&::after': {
                    backgroundColor: '$colorNeutralPrimaryText',
                },
            },
        },
        disabled: {
            true: {
                borderColor: '$colorNeutralDisabledBackground',
                '&::after': {
                    backgroundColor: '$colorNeutralDisabledText',
                },
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
