import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({item}) => {
    return (
        <div>
            <figure>
                <img src={item.image} alt={item.title} />
            </figure>
            <span>{item.title}</span>
            <span>{item.price}</span>
            <XMarkIcon
                className="size-6 text-black cursor-pointer"
                onClick={() => context.closeCheckoutSideMenu()}
            />
        </div>
    )
}

export default OrderCard;