export interface SearchBarProps {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onSearch?: () => void
    fullWidth?: boolean
}
