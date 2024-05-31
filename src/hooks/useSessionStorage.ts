import { useCallback, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export default function useSessionStorage<T>(
    key: string,
    initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, () => void] {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue
    const [storedValue, setStoredValue] = useState(initialValueToUse)

    const readValue = useCallback((): T => {
        try {
            const raw = window.sessionStorage.getItem(key)
            return raw ? JSON.parse(raw) : initialValueToUse
        } catch (error) {
            console.warn(`Error reading sessionStorage key "${key}":`, error)
            return initialValueToUse
        }
    }, [key, initialValueToUse])

    const setValue: Dispatch<SetStateAction<T>> = useCallback(value => {
        try {
            const newValue = value instanceof Function ? value(readValue()) : value
            window.sessionStorage.setItem(key, JSON.stringify(newValue))
            setStoredValue(newValue)
        } catch (error) {
            console.warn(`Error setting sessionStorage key "${key}":`, error)
        }
    }, [key, readValue])

    const removeValue = useCallback(() => {
        window.sessionStorage.removeItem(key)
    }, [key])

    useEffect(() => {
        setStoredValue(readValue())
    }, [readValue])

    return [storedValue, setValue, removeValue]
}