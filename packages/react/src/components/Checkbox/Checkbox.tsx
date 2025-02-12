import { useState } from 'react'
import { CheckboxProps } from './Checkbox.types'
import { useId } from '../../../../react/src/hooks'
import { labelStyle, inputStyle, checkboxStyle } from '../../../../styles/src/components/Checkbox'

const Checkbox = ({ id: customId, checked, onChange, label, disabled }: CheckboxProps) => {
    const id = customId || useId('checkbox')

    const [isChecked, setIsChecked] = useState(checked ?? false)

    const isCheckedProp = checked ?? isChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked

        if (onChange) {
            onChange(newChecked)
        } else {
            setIsChecked(newChecked)
        }
    }

    return (
        <label className={labelStyle()}>
            <input
                id={id}
                className={inputStyle()}
                type='checkbox'
                checked={isCheckedProp}
                onChange={handleChange}
                disabled={disabled}
            />
            <span className={checkboxStyle({ checked: isCheckedProp, disabled })} aria-checked={isCheckedProp} />
            {label}
        </label>
    )
}

export default Checkbox
