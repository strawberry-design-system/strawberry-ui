import { createContext } from 'react'
import { ThemeKeys } from '@strawberry-ui/styles'

export interface ThemeContextType {
    theme: ThemeKeys
    setTheme: (theme: ThemeKeys) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
