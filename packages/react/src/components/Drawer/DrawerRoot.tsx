import { useEffect } from 'react'
import { drawerContainerStyle, drawerStyle } from '@strawberry-ui/styles/components/Drawer'
import { DrawerProps } from './Drawer.types'

const Drawer = ({ isOpen, onClose, placement = 'left', children }: DrawerProps) => {
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

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose?.()
		}
	}

	return (
		<div className={drawerContainerStyle()} onClick={handleOverlayClick}>
			<div className={drawerStyle({ placement })}>{children}</div>
		</div>
	)
}

export default Drawer
