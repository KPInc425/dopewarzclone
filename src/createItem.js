// Drug Factory Function
const createItem = (name, price, quantity) => {
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
    }
};

export default createItem;



