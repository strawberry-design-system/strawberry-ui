import { HeadingProps } from './Heading.types'
import { headingStyle } from '@strawberry-ui/styles/components/Heading'

const Heading = ({ size, children }: HeadingProps) => {
    return (
        <span className={headingStyle({ size })}>{children}</span>
    )
}

export default Heading