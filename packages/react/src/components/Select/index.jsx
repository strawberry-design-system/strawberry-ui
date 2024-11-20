import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Icon from '../Icon'
import DropdownList from '../DropdownList'
import DropdownItem from '../DropdownItem'

const Select = ({ placeholder, list, ...rest }) => {
    const select = useRef()

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState()

    useEffect(() => {
        const onClickOutside = (e) => {
            if (!select.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', onClickOutside)

        return () => document.removeEventListener('mousedown', onClickOutside)
    })

    return (
        <div className={styles.select} ref={select}>
            <button className={styles.selectButton} onClick={() => setIsOpen(!isOpen)} type='button' {...rest}>
                {selectedValue != null ? (
                    <p className={styles.title}>{list[selectedValue].name}</p>
                ) : (
                    <p className={styles.placeholder}>{placeholder}</p>
                )}
                {isOpen ? (
                    <Icon name="arrow-up" />
                ) : (
                    <Icon name="arrow-down" />
                )}
            </button>
            {isOpen && <DropdownList>
                {placeholder && <button className={styles.defaultItem} onClick={() => setSelectedValue()} type='button'>
                    {placeholder}
                </button>}
                {list.map((item, i) => (
                    <DropdownItem actived={selectedValue == i} onClick={() => setSelectedValue(i)} type='button' key={i}>
                        {item.icon}
                        {item.name}
                    </DropdownItem>
                ))}
            </DropdownList>}
        </div>
    )
}

export default Select