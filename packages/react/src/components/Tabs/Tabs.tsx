import { tabsStyle } from '@strawberry-ui/styles/components/Tabs'
import { TabsProps } from './Tabs.types'

const Tabs = ({ children }: TabsProps) => {
    return <ul className={tabsStyle()}>{children}</ul>
}

export default Tabs