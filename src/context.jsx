import { Children, createContext, useContext, useState } from "react";

const AppContext=createContext()

export const AppProvider=({children})=>{
//states
const [isSidebarOpen,SetIsSidebarOpen]=useState(false)

const [pageId,setPageId]=useState(null)
//fns
const openSidebar=()=>{


    SetIsSidebarOpen(true)
}
const closeSidebar=()=>{


    SetIsSidebarOpen(false)
}



return<AppContext.Provider value={{

    isSidebarOpen,openSidebar,closeSidebar,pageId,setPageId
}}>

        {children}
</AppContext.Provider>

}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}