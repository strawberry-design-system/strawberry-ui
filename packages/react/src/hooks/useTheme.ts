import { useContext } from 'react'
import { ThemeContext } from '../contexts'

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
    }
    
    return context
}

export default useTheme
