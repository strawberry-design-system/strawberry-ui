export interface BaseProgressProps {
    type?: 'linear' | 'circular'
    variant?: 'primary' | 'success' | 'warning' | 'error'
    value?: number | null
    showLabel?: boolean
}

export interface LinearProgressProps extends BaseProgressProps {
    type?: 'linear'
    fullWidth?: boolean
}

export interface CircularProgressProps extends BaseProgressProps {
    type?: 'circular'
    fullWidth?: never
}

export type ProgressProps = LinearProgressProps | CircularProgressProps
