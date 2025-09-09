import { darkTheme } from './dark.css'

export const themes = {
	light: {},
	dark: darkTheme
}

export type ThemeKeys = keyof typeof themes

export { darkTheme }
