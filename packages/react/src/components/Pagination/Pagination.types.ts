export interface PaginationTypes {
    current?: number
    defaultCurrent?: number
    total?: number
    siblings?: number
    edge?: number
    onPageChange?: (page: number) => void
    disabled?: boolean
}
