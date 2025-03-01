export type SelectOptionType = {
    value: string
    label: string
}

export interface SelectProps {
    placeholder?: string
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    options?: SelectOptionType[]
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    disabled?: boolean
}
