import { css } from '../stitches.config'

export const buttonStyle = css({
    alignItems: 'center',
    borderRadius: '$full',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'bold',
    gap: '$xsmall',
    justifyContent: 'center',
    textDecoration: 'none',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$colorAccent',
                border: 'none',
                color: '$colorNeutralPrimaryBackground',
                '&:not(:disabled):hover': {
                    backgroundColor: '$colorAccentHover'
                },
                '&:disabled': {
                    backgroundColor: '$colorNeutralDisabledBackground',
                    color: '$colorNeutralDisabledText'
                }
            },
            secondary: {
                backgroundColor: 'transparent',
                borderColor: '$colorNeutralBorder',
                borderStyle: 'solid',
                borderWidth: '$thin',
                color: '$colorNeutralPrimaryText',
                '&:not(:disabled):hover': {
                    backgroundColor: '$colorNeutralHover'
                },
                '&:disabled': {
                    borderColor: '$colorNeutralDisabledBackground',
                    color: '$colorNeutralDisabledText'
                }
            },
            tertiary: {
                backgroundColor: 'transparent',
                border: 'none',
                color: '$colorNeutralPrimaryText',
                '&:not(:disabled):hover': {
                    backgroundColor: '$colorNeutralHover'
                },
                '&:disabled': {
                    color: '$colorNeutralDisabledText'
                }
            }
        },
        size: {
            small: {
                fontSize: '$xsmall',
                padding: '$small'
            },
            medium: {
                fontSize: '$small',
                padding: '$medium'
            },
            large: {
                fontSize: '$medium',
                padding: '$large'
            }
        },
        fullWidth: {
            true: {
                width: '$full'
            }
        },
        textButton: {
            true: {}
        }
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    },
    compoundVariants: [
        {
            textButton: 'true',
            size: 'small',
            css: {
                paddingInline: '$large'
            }
        },
        {
            textButton: 'true',
            size: 'medium',
            css: {
                paddingInline: '$xlarge'
            }
        },
        {
            textButton: 'true',
            size: 'large',
            css: {
                paddingInline: '$xxlarge'
            }
        }
    ],
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        fullWidth: false
    }
})
