import { TextProps } from './Text.types'
import { textStyle } from '@strawberry-ui/styles/components/Text'

const Text = ({ size, children }: TextProps) => {
    return (
        <p className={textStyle({ size })}>{children}</p>
    )
}

export default Text