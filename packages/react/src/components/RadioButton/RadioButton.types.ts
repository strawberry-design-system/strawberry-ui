export interface RadioButtonProps {
    id?: string
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    disabled?: boolean
}
