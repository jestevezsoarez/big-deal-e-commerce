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

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Filtered products
    const [filteredItems, setFilteredItems] = useState(null);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        if (searchByCategory?.length > 0)
            return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()));
        else
            return items;
    }

    useEffect(() => {
        if (searchByTitle) {       
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        }
        if (searchByCategory) {
            setFilteredItems(filteredItemsByCategory(items, searchByCategory));
        }
    }, [searchByTitle, searchByCategory]);

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
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )    
}