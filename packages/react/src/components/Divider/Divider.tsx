import { DividerProps } from './Divider.types'
import { dividerStyle } from '@strawberry-ui/styles/components/Divider'

export const Divider = ({ orientation = 'horizontal' }: DividerProps) => {
    return <div className={dividerStyle({ orientation })} />
}
