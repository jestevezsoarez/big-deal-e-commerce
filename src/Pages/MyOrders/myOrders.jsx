import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/context";
import Layout from "../../components/Layout/layout";
import OrderCards from "../../components/OrderCards/orderCards";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-4">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrderCards
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
