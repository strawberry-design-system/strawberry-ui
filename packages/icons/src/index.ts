export const icons = {
	placeholder: () => import('./svgs/placeholder.svg'),
	x: () => import('./svgs/x.svg')
}

export type IconName = keyof typeof icons
