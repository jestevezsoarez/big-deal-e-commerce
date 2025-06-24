import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";
import { CheckIcon } from "@heroicons/react/24/solid";

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = (item) => {
    context.openProductDetail();
    context.setProductToShow(item);
  }

  const addProductToCart = (event, item) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([
      ...context.cartProducts, 
      item
    ]);
    context.openCheckoutSideMenu();
  }

  const renderBtnDescription = (id) => {
    const isProductInCart = context.cartProducts.filter(product => product.id === id).length > 0;
    if (!isProductInCart) {
      return (
        <button 
          className="bg-blue-400 hover:bg-blue-500 text-white w-full font-medium rounded-md cursor-pointer py-1"
          onClick={(event) => addProductToCart(event, item)}  
        >        
            Add to Cart
        </button>
      )
    } else {
      return (
        <button 
          className="bg-gray-200 text-white w-full font-medium rounded-md cursor-pointer py-1"
        >        
            <CheckIcon className="size-6 text-green-700 w-full" />
        </button>
      )
    }

  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-5"
      onClick={() => showProductDetail(item)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.image}
          alt={item.title}
        />
      </figure>
      {renderBtnDescription(item.id)}
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{item.title.slice(0, 20)}</span>
        <span className="text-lg font-bold">${item.price}</span>
      </p>
    </div>
  );
};

export default Card;
