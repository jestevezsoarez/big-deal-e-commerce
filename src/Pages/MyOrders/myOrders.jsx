import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/context";
import Layout from "../../components/Layout/layout";
import OrderCards from "../../components/OrderCards/orderCards";

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            MyOrders
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrderCards
                            totalProducts={order.totalPrice}
                            totalPrice={order.totalProducts}
                        />                    
                    </Link>
                ))
            }                       
        </Layout>
    )
}

export default MyOrders;