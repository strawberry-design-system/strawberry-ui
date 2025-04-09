import { css } from '../stitches.config'

export const modalContainerStyle = css({
    height: '$full',
    left: 0,
    overflowY: 'auto',
    position: 'fixed',
    top: 0,
    width: '$full',
    zIndex: 1,
})

export const backdropStyle = css({
    alignItems: 'center',
    backgroundColor: '$colorNeutralBackdrop',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    minHeight: '$full',
    padding: '$xxlarge',
    position: 'absolute',
    top: 0,
    width: '$full',
})

export const modalStyle = css({
    backgroundColor: '$colorNeutralPrimaryBackground',
    borderRadius: '$xlarge',
    maxWidth: '$xlarge',
    position: 'relative',
    width: '$full',
})
