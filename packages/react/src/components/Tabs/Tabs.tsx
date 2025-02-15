import { tabsStyle } from '@strawberry-ui/styles/components/Tabs'
import { TabsProps } from './Tabs.types'

export const Tabs = ({ children }: TabsProps) => {
    return <ul className={tabsStyle()}>{children}</ul>
}
