import { darkTheme } from './dark.css'
import { lightTheme } from './light.css'

export const themes = {
	light: lightTheme,
	dark: darkTheme
}

export type ThemeKeys = keyof typeof themes
