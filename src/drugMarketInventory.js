const drugMarketInventory = (location, drugList, marketInfluence) => {
    // Initialize Location Inventory Array
    let todaysInventory = [];
    // For each product on the current druglist populate current product data
    for (product of drugList) {

        // Set variables and make calculations
        let name = product.name;
        let price = calculateItemCost(product.price, marketInfluence);
        let quantity = calculateLocationQuantity(location, marketInfluence);
        let quality =  qualityCheck(location.avgQuality);

        // Populate current location inventory
        todaysInventory.push(createItem(name, price, quantity, quality));
    }
    console.log(todaysInventory);
};

export default drugMarketInventory;