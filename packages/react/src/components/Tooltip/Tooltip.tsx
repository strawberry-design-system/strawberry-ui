import { useState } from 'react'
import { TooltipProps } from './Tooltip.types'
import { useId } from '../../../../react/src/hooks'
import { containerStyle, tooltipStyle } from '../../../../styles/src/components/Tooltip'

const Tooltip = ({ id: customId, title, position = 'bottom', onShow, onHide, children }: TooltipProps) => {
    const id = customId || useId('tooltip')

    const [isVisible, setIsVisible] = useState(false)

    const showTooltip = () => {
        setIsVisible(true)
        onShow && onShow()
    }
    const hideTooltip = () => {
        setIsVisible(false)
        onHide && onHide()
    }

    return (
        <div
            className={containerStyle()}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            aria-describedby={isVisible ? id : undefined}
        >
            {children}
            <div
                id={id}
                className={tooltipStyle({ visible: isVisible, position })}
                role='tooltip'
                aria-live='assertive'
                aria-hidden={!isVisible}
            >
                {title}
            </div>
        </div>
    )
}

export default Tooltip
