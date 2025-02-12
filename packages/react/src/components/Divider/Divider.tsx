import { DividerProps } from './Divider.types'
import { dividerStyle } from '../../../../styles/src/components/Divider'

const Divider = ({ orientation = 'horizontal' }: DividerProps) => {
    return <div className={dividerStyle({ orientation })} />
}

export default Divider
