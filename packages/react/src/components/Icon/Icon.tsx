import { useEffect, useState } from 'react'
import { IconProps } from './Icon.types'
import { iconStyle } from '@strawberry-ui/styles/components/Icon'
import { Spinner } from '../Spinner'
import icons, { IconKeys } from './icons'
import { ReactComponent as DefaultPlaceholder } from '@strawberry-ui/icons/svgs/placeholder.svg'

export const Icon = ({ name, className }: IconProps) => {
    const [selectedIcon, setSelectedIcon] = useState<React.FC | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadIcon = async () => {
            setLoading(true)
            try {
                const IconComponent = await icons[name as IconKeys]
                setSelectedIcon(() => IconComponent)
            } catch (error) {
                console.error(`Icon "${name}" not found.`, error)
            } finally {
                setLoading(false)
            }
        }

        loadIcon()
    }, [name])

    const combinedClassName = `${iconStyle()} ${className || ''}`.trim()

    return (
        <span className={combinedClassName} role='img' aria-label={name}>
            {loading ? <Spinner /> : <>{selectedIcon || <DefaultPlaceholder />}</>}
        </span>
    )
}
