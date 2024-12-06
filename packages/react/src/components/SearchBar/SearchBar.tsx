import { useState } from 'react'
import { SearchBarProps } from './SearchBar.types'
import { searchBarStyle, searchBarInputStyle, clearButtonStyle } from '@strawberry-ui/styles/components/SearchBar'
import Icon from '../Icon'

const SearchBar = ({ value = '', onChange, fullWidth }: SearchBarProps) => {
    const [search, setSearch] = useState(value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)

        onChange && onChange(e)
    }

    const handleClear = () => {
        setSearch('')

        onChange && onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)
    }

    return (
        <div className={searchBarStyle({ focused: search != '', fullWidth: fullWidth })}>
            <Icon name='search' />
            <input
                className={searchBarInputStyle({ focused: search != '' })}
                value={search}
                onChange={handleChange}
                placeholder='Pesquisar'
            />
            {search != '' && (
                <button className={clearButtonStyle()} onClick={handleClear}>
                    <Icon name='x' />
                </button>
            )}
        </div>
    )
}

export default SearchBar
