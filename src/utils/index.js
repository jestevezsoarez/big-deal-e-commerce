/**
 * Calculates the total of a new order
 * @param cartProduct: Array of Objects
 * @returns Total purchase: Number
 */
export const totalPurchase = (products) => {
    let sum  = 0;
    products.forEach(product => {
        sum += product.price;
    });
    return sum;
};