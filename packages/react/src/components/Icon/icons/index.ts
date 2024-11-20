const ICONS_PATH = '@strawberry-ui/icons/svgs/'

const importIcon = (iconName: string) => import(`${ICONS_PATH}${iconName}.svg`).then(module => module.ReactComponent)

const icons = {
    x: importIcon('x'),
    placeholder: importIcon('placeholder')
} as const

export type IconKeys = keyof typeof icons

export default icons
