import { createContext } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


//if we add any element in the following object we will be able to access that element in any component
    const contextValue = {
            
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider