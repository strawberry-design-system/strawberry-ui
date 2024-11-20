import { css } from '../stitches.config'

export const searchBarStyle = css({
    alignItems: 'center',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$full',
    borderStyle: 'solid',
    borderWidth: '$thin',
    display: 'flex',
    gap: '$medium',
    justifyContent: 'center',
    variants: {
        focused: {
            true: {
                paddingInline: '$medium'
            },
            false: {
                paddingLeft: '$medium'
            }
        },
        fullWidth: {
            true: {
                width: '$full'
            }
        }
    },
    '&:focus-within': {
        outline: 'auto',
        outlineColor: '$colorAccent'
    }
})

export const searchBarInputStyle = css({
    backgroundColor: 'transparent',
    border: 'none',
    color: '$colorNeutralPrimaryText',
    fontSize: '$small',
    paddingBlock: '$medium',
    outline: 'none',
    width: '$full',
    variants: {
        focused: {
            false: {
                paddingRight: '$medium'
            }
        }
    }
})

export const clearButtonStyle = css({
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    color: '$colorNeutralPrimaryText',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$small',
    justifyContent: 'center',
    padding: '$xsmall',
    '&:hover': {
        backgroundColor: '$colorNeutralHover'
    }
})