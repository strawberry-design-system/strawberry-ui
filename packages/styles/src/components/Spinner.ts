import { css } from '../stitches.config'

export const spinnerStyle = css({
    borderColor: '$colorNeutralBackdrop',
    borderStyle: 'solid',
    borderWidth: '$thick',
    borderLeftColor: '$colorAccent',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    }
})