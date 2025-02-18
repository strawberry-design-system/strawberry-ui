import { useEffect, useState } from 'react'
import { ChipProps, FilterProps, LinkProps, DefaultProps } from './Chip.types'
import { inputStyle, deleteButtonStyle, chipStyle } from '@strawberry-ui/styles/components/Chip'
import { Icon } from '../Icon'

export const Chip = ({
    type = 'default',
    icon,
    children,
    checked: checkedProp,
    deletable = false,
    onDelete,
    ...rest
}: ChipProps) => {
    switch (type) {
        case 'filter':
            const [checked, setChecked] = useState(checkedProp ?? false)

            useEffect(() => {
                if (checkedProp !== undefined) {
                    setChecked(checkedProp)
                }
            }, [checkedProp])

            return (
                <label>
                    <input className={inputStyle()} checked={checked} type='checkbox' {...(rest as FilterProps)} />
                    <span className={chipStyle({ type, checked })}>
                        {icon}
                        {children}
                    </span>
                </label>
            )
        case 'link':
            return (
                <a className={chipStyle({ type })} {...(rest as LinkProps)}>
                    {icon}
                    {children}
                </a>
            )
        default:
            return (
                <span className={chipStyle()} {...(rest as DefaultProps)}>
                    {icon}
                    {children}
                    {deletable && (
                        <button className={deleteButtonStyle()} onClick={onDelete}>
                            <Icon name='x' />
                        </button>
                    )}
                </span>
            )
    }
}
