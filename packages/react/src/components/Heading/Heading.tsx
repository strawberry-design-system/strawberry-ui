import { HeadingProps } from './Heading.types'
import { headingStyle } from '@strawberry-ui/styles/components/Heading.css'

export const Heading = ({ as: Tag, size = 'medium', children }: HeadingProps) => {
	return <Tag className={headingStyle({ size })}>{children}</Tag>
}
