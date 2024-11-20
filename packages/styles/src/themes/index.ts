import { darkTheme } from './dark'

export const themes = {
  light: {},
  dark: darkTheme
}

export type ThemeKeys = keyof typeof themes

export { darkTheme }
