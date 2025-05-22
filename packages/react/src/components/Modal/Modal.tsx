import { useEffect } from 'react'
import { ModalProps } from './Modal.types'
import { modalContainerStyle, backdropStyle, modalStyle } from '@strawberry-ui/styles/components/Modal'

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			const handleEsc = (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					onClose()
				}
			}

			window.addEventListener('keydown', handleEsc)

			return () => window.removeEventListener('keydown', handleEsc)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose?.()
		}
	}

	return (
		<div className={modalContainerStyle()}>
			<div className={backdropStyle()} onClick={handleOverlayClick}>
				<div className={modalStyle()}>{children}</div>
			</div>
		</div>
	)
}
