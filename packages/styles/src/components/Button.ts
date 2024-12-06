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
                padding: '$small',
                textButton: {
                    true: {
                        paddingInline: '$large'
                    }
                }
            },
            medium: {
                fontSize: '$small',
                padding: '$medium',
                textButton: {
                    true: {
                        paddingInline: '$xlarge'
                    }
                }
            },
            large: {
                fontSize: '$medium',
                padding: '$large',
                textButton: {
                    true: {
                        paddingInline: '$xxlarge'
                    }
                }
            }
        },
        fullWidth: {
            true: {
                width: '$full'
            }
        }
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        fullWidth: false
    }
})
