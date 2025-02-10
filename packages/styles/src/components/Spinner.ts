import { css, keyframes } from '../stitches.config'

const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
})

export const spinnerStyle = css({
    borderColor: '$colorNeutralBackdrop',
    borderStyle: 'solid',
    borderWidth: '$thick',
    borderLeftColor: '$colorAccent',
    borderRadius: '50%',
    display: 'flex',
    width: '24px',
    height: '24px',
    animation: `${spin} 1s linear infinite`
})