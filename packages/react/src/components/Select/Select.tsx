import { useState, useEffect, useRef } from 'react'
import { SelectProps } from './Select.types'
import {
    selectContainerStyle,
    selectStyle,
    selectLabelStyle,
    selectPlaceholderStyle,
    selectListStyle,
    selectOptionStyle,
    selectOptionLabelStyle,
    selectOptionPlaceholderStyle,
} from '@strawberry-ui/styles/components/Select'
import { Icon } from '../Icon'

export const Select = ({
    placeholder = '',
    value,
    defaultValue = '',
    onChange,
    options = [],
    size = 'medium',
    fullWidth = false,
    disabled = false,
}: SelectProps) => {
    const fullOptions = [{ value: '', label: placeholder }, ...options]
    const isControlled = value !== undefined

    const selectRef = useRef<HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(
        fullOptions.findIndex((option) => (isControlled ? option.value === value : option.value === defaultValue)) > 0
            ? fullOptions.findIndex((option) => (isControlled ? option.value === value : option.value === defaultValue))
            : 0
    )
    const [focusedOption, setFocusedOption] = useState<number>(selectedIndex)

    useEffect(() => {
        if (isControlled) {
            const newIndex = fullOptions.findIndex((option) => option.value === value)
            setSelectedIndex(newIndex > 0 ? newIndex : 0)
        }
    }, [value, fullOptions, isControlled])

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (!selectRef.current?.contains(document.activeElement)) return

            switch (e.key) {
                case 'Escape':
                    setIsOpen(false)
                    break
                case 'ArrowDown':
                    if (!isOpen) {
                        setIsOpen(true)
                    } else {
                        setFocusedOption((prev) => Math.min(prev + 1, options.length))
                    }
                    break
                case 'ArrowUp':
                    setFocusedOption((prev) => Math.max(prev - 1, 0))
                    break
                case 'Enter':
                    e.preventDefault()

                    if (isControlled && !onChange) {
                        setFocusedOption(selectedIndex)
                    }

                    !isControlled && setSelectedIndex(focusedOption)
                    onChange && onChange(fullOptions[focusedOption].value)

                    setIsOpen(false)
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [isOpen, focusedOption, options.length])

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', onClickOutside)

        return () => document.removeEventListener('mousedown', onClickOutside)
    }, [])

    const handleSelect = (i: number) => {
        if (!isControlled) {
            setSelectedIndex(i)
        }

        onChange && onChange(fullOptions[i].value)
        setIsOpen(false)
    }

    const handleFocus = (i: number) => {
        if (!isControlled || onChange) {
            setFocusedOption(i)
        }
    }

    return (
        <div className={selectContainerStyle({ fullWidth })} ref={selectRef}>
            <button
                className={selectStyle({ size })}
                onClick={() => setIsOpen(!disabled && !isOpen)}
                disabled={disabled}
                type='button'
                aria-haspopup='listbox'
                aria-expanded={isOpen}
                aria-disabled={disabled}
                role='combobox'
            >
                <p className={selectedIndex > 0 ? selectLabelStyle() : selectPlaceholderStyle()}>
                    {fullOptions[selectedIndex].label}
                </p>
                {isOpen ? <Icon name='arrow-up' /> : <Icon name='arrow-down' />}
            </button>
            {isOpen && (
                <ul className={selectListStyle()} role='listbox'>
                    {fullOptions.map((option, i) => (
                        <li key={i} role='option' aria-selected={selectedIndex === i}>
                            <button
                                className={`${selectOptionStyle({ size, focused: focusedOption === i })} ${
                                    i > 0
                                        ? selectOptionLabelStyle({ actived: selectedIndex === i })
                                        : selectOptionPlaceholderStyle()
                                }`}
                                onClick={() => handleSelect(i)}
                                onFocus={() => handleFocus(i)}
                                type='button'
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
