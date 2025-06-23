import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({item}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={item.image} alt={item.title} />
            </figure>
            <p className="text-sm font-light">{item.title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{item.price}</p>
                <XMarkIcon
                    className="size-6 text-black cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
        </div>
    )
}

export default OrderCard;