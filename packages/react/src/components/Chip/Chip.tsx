import { ChipProps, FilterProps, LinkProps, DefaultProps } from './Chip.types'
import { inputStyle, deleteButtonStyle, chipStyle } from '@strawberry-ui/styles/components/Chip'
import Icon from '../Icon'

const Chip = ({
    type = 'default',
    icon,
    children,
    deletable = false,
    onDelete,
    ...rest
}: ChipProps) => {
    switch (type) {
        case 'filter':
            return (
                <label>
                    <input className={inputStyle()} type="checkbox" {...(rest as FilterProps)} />
                    <span className={chipStyle({ type })}>
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
                            <Icon name="x" />
                        </button>
                    )}
                </span>
            )
    }
}

export default Chip
