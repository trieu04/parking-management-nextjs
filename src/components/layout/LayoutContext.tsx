import React, { useState, createContext } from "react"

export type BreadcumsBlock = {
    title: string,
    href: string
}

type LayoutContextType = {
    headerText: string,
    setHeaderText: React.Dispatch<React.SetStateAction<string>>
    mainTitle: string,
    setMainTitle: React.Dispatch<React.SetStateAction<string>>
    breadcums: BreadcumsBlock[],
    setBreadcums: React.Dispatch<React.SetStateAction<BreadcumsBlock[]>>
}

export const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType)


export const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [headerText, setHeaderText] = useState("")
    const [breadcums, setBreadcums] = useState<BreadcumsBlock[]>([])
    const [mainTitle, setMainTitle] = useState("")
    return (
        <LayoutContext.Provider value={{
            headerText,
            setHeaderText,
            mainTitle,
            setMainTitle,
            breadcums,
            setBreadcums
        }}>
            
            {children}
        
        </LayoutContext.Provider>
    )
} 