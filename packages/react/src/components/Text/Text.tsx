import { TextProps } from './Text.types'
import { textStyle } from '@strawberry-ui/styles/components/Text'

export const Text = ({ size, children }: TextProps) => {
    return <p className={textStyle({ size })}>{children}</p>
}
