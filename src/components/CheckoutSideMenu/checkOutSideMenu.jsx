import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/context";
import OrderCard from "../OrderCard/orderCard";
import { totalPurchase } from "../../utils";
import "./styles.css";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const newProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(newProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: getOrderDate(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPurchase(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  const getOrderDate = () => {
    const today = new Date();
    return today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-black cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title.slice(0, 20)}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font'light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPurchase(context.cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className="w-full bg-black text-white rounded-lg py-3 "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
