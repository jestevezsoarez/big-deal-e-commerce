import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail - Show Product
    const [produtToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                produtToShow,
                setProductToShow,
                cartProducts,
                setCartProducts
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )    
}