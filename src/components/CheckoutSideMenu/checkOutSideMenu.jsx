import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/context";
import OrderCard from "../OrderCard/orderCard";
import {totalPurchase} from "../../utils";
import "./styles.css";
  
const CheckOutSideMenu = () => {    
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const newProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(newProducts);
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-black cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll">
        {
          context.cartProducts.map(product => 
            (
              <OrderCard
              key = {product.id}
              id = {product.id} 
              title = {product.title.slice(0, 20)}
              imageUrl = {product.image}
              price = {product.price}
              handleDelete = {handleDelete}
              />
            )
          )
        }
        <div className="px-6">
          <p>
            <span>Total:</span>
            <span>$ {totalPurchase(context.cartProducts)}</span>
          </p>
        </div>      
      </div>
    </aside>
  );
}

export default CheckOutSideMenu;