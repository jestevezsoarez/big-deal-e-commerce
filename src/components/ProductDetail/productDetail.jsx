import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  if (context.isProductDetailOpen) {
    return (
      <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Detail</h2>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </aside>
    );
  }
};

export default ProductDetail;
