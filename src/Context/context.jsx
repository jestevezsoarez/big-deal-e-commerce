import { createContext } from "react";

const ShoppongCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppongCartContext.Provider>
            {children}
        </ShoppongCartContext.Provider>
    )    
}