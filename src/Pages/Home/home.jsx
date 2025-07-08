import { useContext } from "react";
import Layout from "../../components/Layout/layout";
import Card from "../../components/Card/card";
import ProductDetail from "../../components/ProductDetail/productDetail";
import { ShoppingCartContext } from "../../Context/context";

function Home() {
    const context = useContext(ShoppingCartContext);

    return(
        <Layout>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
              {
                context.items?.map((item) => (
                    <Card 
                        key={item.id}
                        item={item}
                    />
                ))
              }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home;