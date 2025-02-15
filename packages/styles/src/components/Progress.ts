import { css, keyframes } from '../stitches.config'

const circularIndeterminate = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
})

export const circularStyle = css({
    alignItems: 'center',
    aspectRatio: '1/1',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '$medium',
    '&::before': {
        backgroundColor: '$colorNeutralPrimaryBackground',
        borderRadius: '50%',
        content: '',
        height: '85%',
        position: 'absolute',
        width: '85%',
    },
    variants: {
        variant: {
            primary: {
                background:
                    'conic-gradient($colorAccent var(--cirlce-gradient-degree), $colorNeutralSecondaryBackground 0deg)',
            },
            success: {
                background:
                    'conic-gradient($colorPositive var(--cirlce-gradient-degree), $colorNeutralSecondaryBackground 0deg)',
            },
            warning: {
                background:
                    'conic-gradient($colorWarning var(--cirlce-gradient-degree), $colorNeutralSecondaryBackground 0deg)',
            },
            error: {
                background:
                    'conic-gradient($colorNegative var(--cirlce-gradient-degree), $colorNeutralSecondaryBackground 0deg)',
            },
        },
        indeterminate: {
            true: {
                animation: `${circularIndeterminate} 1s linear infinite`,
            },
        },
    },
})

export const circularInnerStyle = css({
    position: 'relative',
})

export const linearContainerStyle = css({
    alignItems: 'center',
    display: 'flex',
    gap: '$xsmall',
})

const linearIndeterminate = keyframes({
    '0%': { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(200%)' },
})

export const linearStyle = css({
    backgroundColor: '$colorNeutralSecondaryBackground',
    height: '8px',
    overflow: 'hidden',
    width: '100%',
    variants: {
        fullWidth: {
            true: {
                width: '$full',
            },
            false: {
                borderRadius: '$full',
                maxWidth: '$large',
            },
        },
    },
})

export const linearInnerStyle = css({
    display: 'block',
    height: '$full',
    transition: 'width 0.3s',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$colorAccent',
            },
            success: {
                backgroundColor: '$colorPositive',
            },
            warning: {
                backgroundColor: '$colorWarning',
            },
            error: {
                backgroundColor: '$colorNegative',
            },
        },
        indeterminate: {
            true: {
                animation: `${linearIndeterminate} 1s linear infinite`,
            },
        },
        fullWidth: {
            false: {
                borderRadius: '$full',
            },
        },
    },
})
