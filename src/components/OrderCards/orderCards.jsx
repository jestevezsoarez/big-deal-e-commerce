import { ChevronRightIcon } from "@heroicons/react/24/solid";


const OrderCards = props => {
    const { totalProducts, totalPrice } = props;

    return (
        <div className="flex justify-between items-center mb-3 border border-black w-80 rounded-lg font-light p-4">
            <div className="flex flex-col justify-between">
                <span>01.07.2025</span>
                <span>{totalProducts} articles</span>                
            </div>
            <div>
                <span className="font-medium text-2xl">${totalPrice}</span>
                <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"></ChevronRightIcon>
            </div>
        </div>
    )
}

export default OrderCards;