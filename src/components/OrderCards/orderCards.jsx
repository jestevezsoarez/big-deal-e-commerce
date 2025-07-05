import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCards = props => {
    const { totalProducts, totalPrice } = props;

    return (
        <div className="flex justify-between items-center mb-3 border border-black w-60 rounded-lg font-light p-3">
            <div className="flex flex-col">
                <span>01.07.2025</span>
                <span>{totalProducts} articles</span>                
            </div>
            <div>
                <span>{totalPrice}</span>
            </div>
        </div>
    )
}

export default OrderCards;