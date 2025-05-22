import { TextFieldProps } from './TextField.types'
import { useId } from '@strawberry-ui/react/hooks'
import { textFieldStyle } from '@strawberry-ui/styles/components/TextField'
import { Field } from '../Field'

export const TextField = ({
	id: customId,
	label,
	value,
	onChange,
	placeholder,
	disabled = false,
	required = false,
	helperText,
	error = false,
	errorMessage,
	fullWidth = false,
	autoFocus = false
}: TextFieldProps) => {
	const id = customId || useId('textfield')

	return (
		<Field
			id={id}
			label={label}
			required={required}
			helperText={helperText}
			error={error}
			errorMessage={errorMessage}
			fullWidth={fullWidth}
		>
			<input
				id={id}
				className={textFieldStyle({ error, fullWidth })}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				required={required}
				autoFocus={autoFocus}
				aria-invalid={error ? 'true' : 'false'}
				aria-describedby={
					error && errorMessage ? `${id}-error-message` : helperText ? `${id}-helper-text` : undefined
				}
			/>
		</Field>
	)
}
