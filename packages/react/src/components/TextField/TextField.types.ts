export interface TextFieldProps {
    id?: string
    label?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    disabled?: boolean
    required?: boolean
    helperText?: string
    error?: boolean
    errorMessage?: string
    fullWidth?: boolean
    autoFocus?: boolean
}