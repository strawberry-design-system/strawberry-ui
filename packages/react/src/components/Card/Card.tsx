import { CardProps } from './Card.types'
import { cardStyle } from '@strawberry-ui/styles/components/Card'

const Card = ({ fullWidth = false, children }: CardProps) => {
    return (
        <div className={cardStyle({ fullWidth })}>
            {children}
        </div>
    )
}

export default Card