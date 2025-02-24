export interface PaginationTypes {
    current?: number
    defaultCurrent?: number
    total?: number
    siblings?: number
    boundaries?: number
    onPageChange?: (page: number) => void
    disabled?: boolean
}
