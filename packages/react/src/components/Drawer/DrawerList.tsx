import { drawerListStyle } from '@strawberry-ui/styles/components/Drawer'
import { DrawerListProps } from './Drawer.types'

const DrawerList = ({ children }: DrawerListProps) => {
    return <ul className={drawerListStyle()}>{children}</ul>
}

export default DrawerList
