// Price AVG function
const checkPriceAverage = (itemsHeld, newItems) => {
    let averagePrice = ((itemsHeld.price * itemsHeld.quantity) + 
                        (newItems.price * newItems.quantity)) / 
                        (itemsHeld.quantity + newItems.quantity);
    console.log(`AveragePrice: ${averagePrice}`);
    averagePrice= Math.round(averagePrice);

    return averagePrice;
};

export default checkPriceAverage;