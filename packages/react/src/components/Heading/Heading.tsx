import { HeadingProps } from './Heading.types'
import { headingStyle } from '@strawberry-ui/styles/components/Heading'

export const Heading = ({ as: Tag, size, children }: HeadingProps) => {
	return <Tag className={headingStyle({ size })}>{children}</Tag>
}
