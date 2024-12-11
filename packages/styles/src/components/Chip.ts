import { css } from '../stitches.config'

export const inputStyle = css({
    display: 'none'
})

export const deleteButtonStyle = css({
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$colorNeutralPrimaryText',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$small',
    justifyContent: 'center'
})

export const chipStyle = css({
    alignItems: 'center',
    background: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderRadius: '$full',
    borderStyle: 'solid',
    borderWidth: '$thin',
    color: '$colorNeutralPrimaryText',
    display: 'inline-flex',
    fontSize: '$small',
    gap: '$small',
    paddingBlock: '$xsmall',
    paddingInline: '$medium',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    variants: {
        type: {
            filter: {
                cursor: 'pointer',
                checked: {
                    true: {
                        backgroundColor: '$colorAccent',
                        border: 'none',
                        color: '$colorNeutralPrimaryBackground'
                    }
                },
                '&:hover': {
                    backgroundColor: '$colorNeutralHover'
                }
            },
            link: {
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '$colorNeutralHover'
                }
            }
        }
    }
})
