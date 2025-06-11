import { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Card from "../../components/Card/card";

function Home() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, []);

    return(
        <Layout>
            Home
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
              {
                items?.map((item) => (
                    <Card 
                        key={item.id}
                        item={item}
                    />
                ))
              }
            </div>
        </Layout>
    )
}

export default Home;