import { css } from '../stitches.config'

export const drawerContainerStyle = css({
    display: 'flex',
    left: 0,
    height: '$full',
    position: 'fixed',
    top: 0,
    width: '$full'
})

export const drawerBackdropStyle = css({
    backgroundColor: '$colorNeutralBackdrop',
    height: '$full',
    width: '$full'
})

export const drawerStyle = css({
    backgroundColor: '$colorNeutralPrimaryBackground',
    height: '$full',
    maxWidth: '$xsmall',
    position: 'absolute',
    width: '$full'
})

export const drawerListStyle = css({
    maxHeight: '$full',
    listStyle: 'none',
    overflowY: 'auto'
})

export const drawerItemStyle = css({
    display: 'flex'
})

export const drawerLinkStyle = css({
    fontSize: '$small',
    padding: '$large',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    width: '$full',
    variants: {
        selected: {
            true: {
                borderLeftColor: '$colorAccent',
                borderLeftStyle: 'solid',
                borderLeftWidth: '$medium',
                color: '$colorNeutralPrimaryText',
                fontWeight: '$bold'
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
