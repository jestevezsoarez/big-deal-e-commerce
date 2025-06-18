import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  if (context.isProductDetailOpen) {
    return (
      <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Details</h2>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
        <figure className="px-6">
          <img className="w-full h-full rounded-lg object-cover" src={context.produtToShow.image} alt={context.produtToShow.title} />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">{context.produtToShow.price}</span>
          <span className="font-medium text-md">{context.produtToShow.title}</span>
          <span className="font-light text-sm">{context.produtToShow.description}</span>
        </p>
      </aside>
    );
  }
};

export default ProductDetail;
