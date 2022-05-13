const createNonDrugItem = (name, price, quantity, ability) => {
    name = name;            // Item Name
    quantity = quantity;    // Grams
    price = price;          // Dollars
    ability = ability;      // function name

    return {
        name,
        quantity,
        price,
        ability
    }
};

export default createNonDrugItem;