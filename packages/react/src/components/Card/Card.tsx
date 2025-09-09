import { CardProps } from './Card.types'
import { cardStyle } from '@strawberry-ui/styles/components/Card.css'

export const Card = ({ fullWidth = false, children }: CardProps) => {
	return <div className={cardStyle({ fullWidth })}>{children}</div>
}
