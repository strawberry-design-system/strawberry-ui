import { SpinnerProps } from './Spinner.types'
import { spinnerStyle } from '@strawberry-ui/styles/components/Spinner'

const Spinner = ({ color, size }: SpinnerProps) => {
    return (
        <span
            className={spinnerStyle({ size })}
            style={{ borderLeftColor: color, borderRightColor: color, borderTopColor: color }}
        />
    )
}

export default Spinner
