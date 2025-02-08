import { tabStyle, tabLinkStyle } from '@strawberry-ui/styles/components/Tab'
import { TabProps } from './Tab.types'

const Tab = ({ selected, href, children }: TabProps) => {
    return (
        <li className={tabStyle()}>
            <a className={tabLinkStyle({ selected })} href={href}>
                {children}
            </a>
        </li>
    )
}

export default Tab