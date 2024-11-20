import { LinkProps } from './Link.types'
import { linkStyle } from '@strawberry-ui/styles/components/Link'

const Link = ({ title, to, target, rel, children }: LinkProps) => {
    return <a className={linkStyle()} title={title} href={to} target={target} rel={rel}>{children}</a>
}

export default Link