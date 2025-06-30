import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";
import Layout from "../../components/Layout/layout";
import OrderCard from "../../components/OrderCard/orderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      MyOrder
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
