/* eslint-disable no-self-assign */
// Drug Factory Function
const createDrug = (name, price, quantity, quality) => {
    name = name;            // Street Name
    quantity = quantity;    // Grams
    price = price;          // Dollars
    quality = quality;      // Grade System

    const info = () => {
        console.log({name, quantity, price});
    }

    return {
        name,
        quantity,
        price,
        quality,
        info,
    }
};

export default createDrug;



