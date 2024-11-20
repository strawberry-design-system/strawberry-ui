import { css } from '../stitches.config'

export const containerStyle = css({
    display: 'inline-block',
    position: 'relative'
})

export const tooltipStyle = css({
    backgroundColor: '$colorNeutralPrimaryBackground',
    borderRadius: '$xsmall',
    color: '$colorNeutralPrimaryText',
    fontSize: '$small',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s',
    whiteSpace: 'nowrap',
    zIndex: '10',
    variants: {
        visible: {
            true: {
                opacity: 1,
                transform: 'translateY(0)',
                visibility: 'visible'
            },
            false: {
                opacity: 0,
                transform: 'translateY(10px)',
                visibility: 'hidden'
            }
        },
        position: {
            top: {
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '$small'
            },
            right: {
                top: '50%',
                left: '100%',
                transform: 'translateY(-50%)',
                marginLeft: '$small'
            },
            bottom: {
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '$small'
            },
            left: {
                top: '50%',
                right: '100%',
                transform: 'translateY(-50%)',
                marginRight: '$small'
            }
        }
    }
})