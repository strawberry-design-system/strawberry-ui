export interface BaseProps {
    icon?: React.ReactNode
    deletable?: boolean
    onDelete?: () => void
    children: string
}

export interface FilterProps extends BaseProps {
    type?: 'filter'
    href?: never
    value?: string
    checked?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
    onClick?: never
    name?: string
    id?: string
    target?: never
    rel?: never
    title?: never
    tabIndex?: never
    'aria-*'?: React.AriaAttributes
}

export interface LinkProps extends BaseProps {
    type?: 'link'
    href?: string
    value?: never
    checked?: never
    onChange?: never
    disabled?: never
    onClick?: never
    name?: never
    id?: never
    target?: '_self' | '_blank' | '_parent' | '_top'
    rel?: string
    title?: string
    tabIndex?: never
    'aria-*'?: React.AriaAttributes
}

export interface DefaultProps extends BaseProps {
    type?: 'default'
    href?: never
    value?: never
    checked?: never
    onChange?: never
    disabled?: never
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    name?: never
    id?: never
    target?: never
    rel?: never
    title?: string
    tabIndex?: number
    'aria-*'?: React.AriaAttributes
}

export type ChipProps = FilterProps | LinkProps | DefaultProps