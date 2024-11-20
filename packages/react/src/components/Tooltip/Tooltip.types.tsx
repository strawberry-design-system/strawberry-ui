export interface TooltipProps {
    id?: string
    title: string
    position: 'top' | 'right' | 'bottom' | 'left'
    onShow?: () => void
    onHide?: () => void
    children: React.ReactNode
}