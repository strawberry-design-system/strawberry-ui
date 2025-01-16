export interface DrawerProps {
    isOpen: boolean
    onClose: () => void
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
