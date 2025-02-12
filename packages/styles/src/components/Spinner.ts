import { css, keyframes } from '../stitches.config'

const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
})

export const spinnerStyle = css({
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '$medium',
    borderLeftColor: '$colorAccent',
    borderRadius: '50%',
    borderRightColor: '$colorAccent',
    borderTopColor: '$colorAccent',
    display: 'flex',
    animation: `${spin} 1s linear infinite`,
    variants: {
        size: {
            small: { width: '$xxxsmall', height: '$xxxsmall' },
            medium: { width: '$xxsmall', height: '$xxsmall' },
            large: { width: '$xsmall', height: '$xsmall' },
            xlarge: { width: '$small', height: '$small' },
        },
    },
    defaultVariants: {
        size: 'medium',
    },
})
