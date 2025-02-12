import { RadioButtonProps } from './RadioButton.types'
import { useId } from '../../hooks'
import { labelStyle, radioButtonStyle } from '@strawberry-ui/styles/components/RadioButton'

const RadioButton = ({ id: customId, checked, onChange, label, disabled }: RadioButtonProps) => {
    const id = customId || useId('radiobutton')

    return (
        <label className={labelStyle({ disabled })}>
            <input
                id={id}
                className={radioButtonStyle()}
                type='radio'
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                aria-checked={checked}
                aria-disabled={disabled && 'true'}
            />
            {label}
        </label>
    )
}

export default RadioButton
