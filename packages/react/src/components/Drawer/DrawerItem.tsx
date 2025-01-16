import { drawerItemStyle, drawerLinkStyle } from '@strawberry-ui/styles/components/Drawer'
import { DrawerItemProps } from './Drawer.types'

const DrawerItem = ({ selected, href, children }: DrawerItemProps) => {
    return (
        <li className={drawerItemStyle()}>
            <a className={drawerLinkStyle({ selected })} href={href}>
                {children}
            </a>
        </li>
    )
}

export default DrawerItem
