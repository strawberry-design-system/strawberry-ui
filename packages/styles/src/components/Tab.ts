import { css } from '../stitches.config'

export const tabStyle = css({
    display: 'flex'
})

export const tabLinkStyle = css({
    fontSize: '$small',
    padding: '$large',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    width: '$full',
    variants: {
        selected: {
            true: {
                borderBottomColor: '$colorAccent',
                borderBottomStyle: 'solid',
                borderBottomWidth: '$medium',
                color: '$colorNeutralPrimaryText'
            },
            false: {
                color: '$colorNeutralSecondaryText',
                '&:hover': {
                    backgroundColor: '$colorNeutralHover'
                }
            }
        }
    }
})
