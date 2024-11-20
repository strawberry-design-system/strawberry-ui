import { useRef } from 'react'

const SYSTEM_NAME = 'strawberry-ui'

function generateId(prefix: string = '') {
    const randomValue = Math.random().toString(36).slice(2, 10)

    if (prefix) {
        return `${SYSTEM_NAME}-${prefix}-${randomValue}`
    }

    return `${SYSTEM_NAME}-${randomValue}`
}

function useId(prefix: string = '') {
    const idRef = useRef<string | undefined>()

    if (!idRef.current) {
        idRef.current = generateId(prefix)
    }

    return idRef.current
}

export default useId
