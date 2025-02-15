import { TextFieldProps } from './TextField.types'
import { useId } from '@strawberry-ui/react/hooks'
import {
    containerStyle,
    labelStyle,
    requiredStyle,
    textFieldStyle,
    helperTextStyle,
    errorMessageStyle,
} from '@strawberry-ui/styles/components/TextField'

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
    autoFocus = false,
}: TextFieldProps) => {
    const id = customId || useId('textfield')

    return (
        <div className={containerStyle({ fullWidth })}>
            {label && (
                <label className={labelStyle()} htmlFor={id}>
                    {label} {required && <span className={requiredStyle()}>*</span>}
                </label>
            )}
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
