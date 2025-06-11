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
            {
                items?.map((item) => (
                    <Card 
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </Layout>
    )
}

export default Home;