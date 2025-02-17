import { useState, ReactNode, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import { themes, ThemeKeys } from '@strawberry-ui/styles'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeKeys>(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeKeys
        return savedTheme || 'light'
    })

    useEffect(() => {
        document.body.className = theme === 'light' ? '' : themes[theme]
        localStorage.setItem('theme', theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
