export interface FieldProps {
	id: string
	label?: string
	required?: boolean
	helperText?: string
	error?: boolean
	errorMessage?: string
	fullWidth?: boolean
	autoFocus?: boolean
	children: React.ReactNode
}
