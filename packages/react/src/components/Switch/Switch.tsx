import { useState } from 'react'
import { SwitchProps } from './Switch.types'
import { useId } from '../../hooks'
import { labelStyle, inputStyle, switchStyle } from '@strawberry-ui/styles/components/Switch'

const Switch = ({ id: customId, checked, onChange, label, disabled }: SwitchProps) => {
    const id = customId || useId('switch')

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
        <label className={labelStyle({ disabled })}>
            <input
                id={id}
                className={inputStyle()}
                type='checkbox'
                checked={isCheckedProp}
                onChange={handleChange}
                disabled={disabled}
            />
            <span className={switchStyle({ checked: isCheckedProp, disabled })} aria-checked={isCheckedProp} />
            {label}
        </label>
    )
}

export default Switch
