import { useEffect } from 'react'
import { drawerContainerStyle, drawerBackdropStyle, drawerStyle } from '@strawberry-ui/styles/components/Drawer'
import { DrawerProps } from './Drawer.types'

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
    useEffect(() => {
        if (isOpen) {
            const handleEsc = (event: { key: string }) => {
                if (event.key === 'Escape') {
                    onClose()
                }
            }

            window.addEventListener('keydown', handleEsc)

            return () => {
                window.removeEventListener('keydown', handleEsc)
            }
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={drawerContainerStyle()}>
            <div className={drawerBackdropStyle()} onClick={onClose}></div>
            <div className={drawerStyle()}>{children}</div>
        </div>
    )
}

export default Drawer
