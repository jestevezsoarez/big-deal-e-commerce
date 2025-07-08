import { useContext } from "react";
import Layout from "../../components/Layout/layout";
import Card from "../../components/Card/card";
import ProductDetail from "../../components/ProductDetail/productDetail";
import { ShoppingCartContext } from "../../Context/context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
        if (context.filteredItems?.length > 0) {
             return (
                context.filteredItems?.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            )
        } else {
            return (
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p class="font-bold">Informational message</p>
                    <p class="text-sm">Some additional text to explain said message.</p>
                </div>
            )
            
        }       
    } else {
        return (
            context.items?.map((item) => (
                <Card key={item.id} item={item} />
            ))
        )
    }
  }

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 mb-4">
        <h2 className="font-medium text-xl">Products</h2>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        className="rounded-lg border-black w-80 p-4 mb-4"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
