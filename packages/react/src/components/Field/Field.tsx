import { FieldProps } from './Field.types'
import {
	containerStyle,
	labelStyle,
	requiredStyle,
	helperTextStyle,
	errorMessageStyle
} from '@strawberry-ui/styles/components/TextField'

export const Field = ({
	id,
	label,
	required = false,
	helperText,
	error = false,
	errorMessage,
	fullWidth = false,
	children
}: FieldProps) => {
	if (!label && !helperText && !error) return children

	return (
		<div className={containerStyle({ fullWidth })}>
			{label && (
				<label htmlFor={id} className={labelStyle()}>
					{label} {required && <span className={requiredStyle()}>*</span>}
				</label>
			)}
			{children}
			{!error && helperText && (
				<span id={`${id}-helper-text`} className={helperTextStyle()}>
					{helperText}
				</span>
			)}
			{error && errorMessage && (
				<span id={`${id}-error-message`} className={errorMessageStyle()}>
					{errorMessage}
				</span>
			)}
		</div>
	)
}
