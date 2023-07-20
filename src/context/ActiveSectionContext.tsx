'use client'
import React from 'react'

export const ActiveSectionContext=React.createContext<null|{active:string,setActive:React.Dispatch<React.SetStateAction<string>>,timeOfLastClick:number,setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>}>(null)

export default function ActiveSectionContextProvider({children}:{children:React.ReactNode}) {
    const [active, setActive] = React.useState<string>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = React.useState<number>(0);

    return (
    <ActiveSectionContext.Provider value={{active,setActive,timeOfLastClick,setTimeOfLastClick}} >
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}