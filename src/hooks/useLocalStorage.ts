import { useCallback, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'


export default function useLocalStorage<T>(
    key: string,
    initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, () => void] {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue
    const [storedValue, setStoredValue] = useState(initialValueToUse)

    const readValue = useCallback((): T => {
        try {
            const raw = window.localStorage.getItem(key)
            return raw ? JSON.parse(raw) : initialValueToUse
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error)
            return initialValueToUse
        }
    }, [key, initialValueToUse])

    const setValue: Dispatch<SetStateAction<T>> = useCallback(value => {
        try {
            const newValue = value instanceof Function ? value(readValue()) : value
            window.localStorage.setItem(key, JSON.stringify(newValue))
            setStoredValue(newValue)
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error)
        }
    }, [key, readValue])

    const removeValue = useCallback(() => {
        window.localStorage.removeItem(key)
    }, [key])

    useEffect(() => {
        setStoredValue(readValue())
    }, [readValue])

    return [storedValue, setValue, removeValue]
}