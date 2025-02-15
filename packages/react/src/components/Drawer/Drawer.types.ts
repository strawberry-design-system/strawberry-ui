export interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    placement?: 'top' | 'right' | 'bottom' | 'left'
    children?: React.ReactNode
}

export interface DrawerListProps {
    children: React.ReactNode
}

export interface DrawerItemProps {
    selected: boolean
    href: string
    children: React.ReactNode
}
