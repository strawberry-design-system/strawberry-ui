import { css } from '../stitches.config'

export const labelStyle = css({
    alignItems: 'center',
    color: '$colorNeutralPrimaryText',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$small',
    gap: '$xsmall',
})

export const inputStyle = css({
    display: 'none',
})

export const checkboxStyle = css({
    backgroundColor: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$small',
    borderStyle: 'solid',
    borderWidth: '$thin',
    display: 'flex',
    height: '20px',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    width: '20px',
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
                    position: 'relative',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                },
            },
        },
    },
})
