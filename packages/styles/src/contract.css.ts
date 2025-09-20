import { createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
	color: {
		accent: {
			default: '',
			hover: '',
			soft: ''
		},
		negative: {
			default: '',
			hover: '',
			soft: ''
		},
		positive: {
			default: '',
			hover: '',
			soft: ''
		},
		warning: {
			default: '',
			hover: '',
			soft: ''
		},
		information: {
			default: '',
			hover: '',
			soft: ''
		},
		border: '',
		surface: {
			backdrop: '',
			default: '',
			disabled: '',
			hover: '',
			muted: '',
			soft: ''
		},
		text: {
			default: '',
			disabled: '',
			inverse: '',
			muted: '',
			placeholder: ''
		}
	}
})
