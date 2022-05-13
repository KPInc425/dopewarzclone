// Calculates price range depending on base price and current luck
const priceRange = (price, luck) => {
    // Check luck to determine price
    if (luck > 85) {    // Great Luck!
        return price = price * 0.25; 
    } else if (luck < 15) { // Bad Luck!
        return price = price * 3.5;
    } else {
        // Add some variation to base price
        if (luck > 50) {
            return price = price * 0.9;
        } else if (luck < 50) {
            return price = price * 1.1;
        } else {
            return price = price;
        }
    }
};

export default priceRange;