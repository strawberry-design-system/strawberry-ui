import { HeadingProps } from './Heading.types'
import { headingStyle } from '@strawberry-ui/styles/components/Heading'

export const Heading = ({ as, size, children }: HeadingProps) => {
	const Tag = as

	return <Tag className={headingStyle({ size })}>{children}</Tag>
}
