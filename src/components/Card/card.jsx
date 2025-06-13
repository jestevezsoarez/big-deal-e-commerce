import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-5">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.image}
          alt={item.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-amber-400 hover:bg-amber-500 w-6 h-6 rounded-full m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </figure>
      <button className="bg-amber-400 hover:bg-amber-500 text-white w-full font-medium rounded-md">Add to Cart</button>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{item.title.slice(0, 20)}</span>
        <span className="text-lg font-bold">${item.price}</span>
      </p>
    </div>
  );
};

export default Card;
