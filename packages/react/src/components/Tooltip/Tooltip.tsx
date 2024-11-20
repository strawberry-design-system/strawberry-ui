import { useState, useRef, useEffect } from 'react'
import { TooltipProps } from './Tooltip.types'
import { useId } from '@strawberry-ui/react/hooks'
import { containerStyle, tooltipStyle } from '@strawberry-ui/styles/components/Tooltip'

const Tooltip = ({ id: customId, title, position = 'bottom', onShow, onHide, children }: TooltipProps) => {
    const id = customId || useId('tooltip')

    const [isVisible, setIsVisible] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

    const tooltipRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)

    const showTooltip = () => {
        setIsVisible(true)
        onShow && onShow()
    }
    const hideTooltip = () => {
        setIsVisible(false)
        onHide && onHide()
    }

    const calculatePosition = () => {
        if (targetRef.current && tooltipRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect()
            const tooltipRect = tooltipRef.current.getBoundingClientRect()
            
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight
            const scrollX = window.scrollX
            const scrollY = window.scrollY

            let top = 0
            let left = 0

            switch (position) {
                case 'top':
                    top = targetRect.top - tooltipRect.height - 10 + scrollY
                    left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 + scrollX
                    break
                case 'right':
                    top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2 + scrollY
                    left = targetRect.right + 10 + scrollX
                    break
                case 'bottom':
                    top = targetRect.bottom + 10 + scrollY
                    left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 + scrollX
                    break
                case 'left':
                    top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2 + scrollY
                    left = targetRect.left - tooltipRect.width - 10 + scrollX
            }

            if (top < 0) {
                top = targetRect.bottom + 10 + scrollY
            }

            if (top + tooltipRect.height > windowHeight) {
                top = targetRect.top - tooltipRect.height - 10 + scrollY
            }

            if (left < 0) {
                left = 10 + scrollX
            }

            if (left + tooltipRect.width > windowWidth) {
                left = targetRect.left - tooltipRect.width - 10 + scrollX
            }

            if (windowWidth < 600) {
                left = Math.max(left, 10 + scrollX)
                top = Math.max(top, 10 + scrollY)
            }

            setTooltipPosition({ top, left })
        }
    }

    useEffect(() => {
        if (isVisible) {
            calculatePosition()
        }
    }, [isVisible, position])

    useEffect(() => {
        if (isVisible) {
            const handleResize = () => calculatePosition()
            const handleScroll = () => calculatePosition()

            window.addEventListener('resize', handleResize)
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('resize', handleResize)
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [isVisible])

    return (
        <div
            className={containerStyle()}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            aria-describedby={isVisible ? id : undefined}
            ref={targetRef}
        >
            {children}
            <div
                id={id}
                className={tooltipStyle({ visible: isVisible, position })}
                role='tooltip'
                aria-live='assertive'
                aria-hidden={!isVisible}
                style={{
                    top: `${tooltipPosition.top}px`,
                    left: `${tooltipPosition.left}px`
                }}
                ref={tooltipRef}
            >
                {title}
            </div>
        </div>
    )
}

export default Tooltip