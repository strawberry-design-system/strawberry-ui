export interface LinkProps {
    title?: string
    to?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    rel?: string
    children: string
}