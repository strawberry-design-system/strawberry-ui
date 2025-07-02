import { HeadingProps } from './Heading.types'
import { headingStyle } from '@strawberry-ui/styles/components/Heading'

export const Heading = ({ size, as = 'h1', children }: HeadingProps) => {
	const Tag = as

	return <Tag className={headingStyle({ size })}>{children}</Tag>
}
