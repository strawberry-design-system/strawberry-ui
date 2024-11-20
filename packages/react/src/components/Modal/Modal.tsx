import { useEffect } from 'react'
import { ModalProps } from './Modal.types'
import { modalContainerStyle, modalContentStyle, backdropStyle, modalStyle } from '@strawberry-ui/styles/components/Modal'

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            const handleEsc = (event: { key: string }) => {
                if (event.key === 'Escape') {
                    onClose()
                }
            }

            window.addEventListener('keydown', handleEsc)
        
            return () => window.removeEventListener('keydown', handleEsc)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={modalContainerStyle()}>
            <div className={modalContentStyle()}>
                <div className={backdropStyle()} onClick={onClose}></div>
                <div className={modalStyle()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal