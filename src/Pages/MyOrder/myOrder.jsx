import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/context";
import Layout from "../../components/Layout/layout";
import OrderCard from "../../components/OrderCard/orderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
    const path = window.location.pathname
    const id = path.substring(path.lastIndexOf('/') + 1);
    console.log(id)

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to={`/my-orders`} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {
          // take the last one with slice
          context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title.slice(0, 20)}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
