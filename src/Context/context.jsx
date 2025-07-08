import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Get products
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, []);

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail - Show Product
    const [produtToShow, setProductToShow] = useState({});

        // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

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
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )    
}