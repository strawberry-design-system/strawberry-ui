import { css } from '../stitches.config'

export const selectContainerStyle = css({
    position: 'relative',
})

export const selectStyle = css({
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '$colorNeutralBorder',
    borderStyle: 'solid',
    borderWidth: '$thin',
    borderRadius: '$full',
    cursor: 'pointer',
    display: 'flex',
    width: '$full',
    variants: {
        size: {
            small: {
                fontSize: '$xsmall',
                gap: '$small',
                paddingBlock: '$small',
                paddingInline: '$large',
            },
            medium: {
                fontSize: '$small',
                gap: '$medium',
                paddingBlock: '$medium',
                paddingInline: '$xlarge',
            },
            large: {
                fontSize: '$medium',
                gap: '$large',
                paddingBlock: '$large',
                paddingInline: '$xxlarge',
            },
        },
        fullWidth: {
            true: {
                width: '$full',
            },
        },
    },
    '&:focus-within': {
        outline: 'auto',
        outlineColor: '$colorAccent',
    },
    '&:disabled': {
        borderColor: '$colorNeutralDisabledBackground',
        color: '$colorNeutralDisabledText',
        cursor: 'not-allowed',
        opacity: 0.5,
    },
    defaultVariants: {
        size: 'medium',
        fullWidth: false,
    },
})

export const selectLabelStyle = css({
    color: '$colorNeutralPrimaryText',
})

export const selectPlaceholderStyle = css({
    color: '$colorNeutralPlaceholder',
})

export const selectListStyle = css({
    backgroundColor: '$colorNeutralPrimaryBackground',
    borderRadius: '$xlarge',
    boxShadow: '$medium',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: '$medium',
    position: 'absolute',
    width: '$full',
})

export const selectOptionStyle = css({
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    textAlign: 'start',
    width: '$full',
    variants: {
        size: {
            small: {
                fontSize: '$xsmall',
                gap: '$small',
                padding: '$small',
            },
            medium: {
                fontSize: '$small',
                gap: '$medium',
                padding: '$medium',
            },
            large: {
                fontSize: '$medium',
                gap: '$large',
                padding: '$large',
            },
        },
        focused: {
            true: {
                backgroundColor: '$colorNeutralHover',
            },
        },
    },
    '&:hover': {
        backgroundColor: '$colorNeutralHover',
    },
    defaultVariants: {
        size: 'medium',
    },
})

export const selectOptionLabelStyle = css({
    variants: {
        actived: {
            true: {
                color: '$colorAccent',
            },
            false: {
                color: '$colorNeutralPrimaryText',
            },
        },
    },
})

export const selectOptionPlaceholderStyle = css({
    color: '$colorNeutralPlaceholder',
})
