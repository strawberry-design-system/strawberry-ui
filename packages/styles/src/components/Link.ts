import { css } from '../stitches.config'

export const linkStyle = css({
    color: '$colorAccent',
    cursor: 'pointer',
    fontSize: '$small',
    textDecoration: 'none',
    '&:hover': {
        color: '$colorAccentHover',
        textDecoration: 'underline'
    }
})