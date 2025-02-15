export interface TooltipProps {
    id?: string
    title: string
    placement: 'top' | 'right' | 'bottom' | 'left'
    onShow?: () => void
    onHide?: () => void
    children: React.ReactNode
}
