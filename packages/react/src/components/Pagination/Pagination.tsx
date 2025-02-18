import { useState } from 'react'
import { PaginationTypes } from './Pagination.types'
import { paginationStyle, pageButtonStyle, pageTextStyle } from '@strawberry-ui/styles/components/Pagination'
import { Icon } from '../Icon'

export const Pagination = ({
    current,
    defaultCurrent = 1,
    total = 10,
    siblings = 1,
    edge = 5,
    onPageChange,
    disabled = false,
}: PaginationTypes) => {
    const [localCurrent, setLocalCurrent] = useState<number>(defaultCurrent)

    const selected = current ?? localCurrent

    const handlePageClick = (page: number) => {
        setLocalCurrent(page)
        onPageChange && onPageChange(page)
    }

    const handlePrevious = () => {
        if (selected > 1) {
            handlePageClick(selected - 1)
        }
    }

    const handleNext = () => {
        if (selected < total) {
            handlePageClick(selected + 1)
        }
    }

    return (
        <div className={paginationStyle()}>
            <button
                className={pageButtonStyle()}
                onClick={handlePrevious}
                disabled={disabled || selected === 1}
                aria-label='Previous page'
            >
                <Icon name='arrow-left' />
            </button>
            {Array.from({ length: total }, (_, index) => index + 1).map((page) => {
                if (
                    page === 1 ||
                    page === total ||
                    (page >= selected - siblings && page <= selected + siblings) ||
                    (page <= edge && selected <= edge - siblings) ||
                    (page > total - edge && selected > total - (edge - siblings))
                ) {
                    return (
                        <button
                            className={pageButtonStyle({ selected: page === selected })}
                            onClick={() => handlePageClick(page)}
                            disabled={disabled}
                            key={page}
                        >
                            {page}
                        </button>
                    )
                } else if (page === 2 || page === total - 1) {
                    return (
                        <span className={pageTextStyle()} key={page}>
                            ...
                        </span>
                    )
                }
            })}
            <button
                className={pageButtonStyle()}
                onClick={handleNext}
                disabled={disabled || selected === total}
                aria-label='Next page'
            >
                <Icon name='arrow-right' />
            </button>
        </div>
    )
}
