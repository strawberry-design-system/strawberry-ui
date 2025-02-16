export interface PaginationTypes {
    current?: number
    defaultCurrent?: number
    total?: number
    sibling?: number
    onPageChange?: (page: number) => void
    disabled?: boolean
}
