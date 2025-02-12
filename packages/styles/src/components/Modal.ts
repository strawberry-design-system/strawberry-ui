import { css } from '../stitches.config'

export const modalContainerStyle = css({
    height: '$full',
    left: 0,
    overflowY: 'auto',
    position: 'fixed',
    top: 0,
    width: '$full',
})

export const modalContentStyle = css({
    alignItems: 'center',
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

export const backdropStyle = css({
    backgroundColor: '$colorNeutralBackdrop',
    height: '$full',
    left: 0,
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
