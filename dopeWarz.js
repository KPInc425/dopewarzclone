// Not sure if this factory function is even needed
const drug = (name, price, quantity, quality) => {
    name = name;    //Street Name
    quantity = quantity;    // Grams
    price = price;  //Dollars
    quality = quality;  // Grade System

    return {
        name,
        quantity,
        price,
        quality,
    }
}

var playerInventory = [

];

const drugListCity1 = [
    {
        "name": "Cannabis Flower",
        "price": 10,
    },
    {
        "name": "Cannabis Extract",
        "price": 30,
    },
    {
        "name": "Acid",
        "price": 15,
    },
    {
        "name": "Cocaine",
        "price": 120,
    },
    {
        "name": "Crack",
        "price": 70,
    },
    {
        "name": "Heroin",
        "price": 182,
    },
    {
        "name": "Methamphetamine",
        "price": 50,
    },
];

const checkLuck = (luckLevel) => {
    luckLevel = luckLevel || 0;
    // Get random # between 0-100
    let luckRoll = Math.floor(Math.random() * 100);
    console.log(luckRoll);
    // Add percentage points baded on Luck Level
    luckRoll = luckRoll + (luckLevel/2);
    console.log(luckRoll);

    return luckRoll;
}

let luck = checkLuck();
let price = drugListCity1[1].price;

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
}

// Testing
const addedItem = { "name": "Cannabis Flower","price": 10};
const numOfItems = 420;
const qualityOfItems = "AAA";
// Testing


// Add Item to Inventory Function

const addItemToInventory = (addedItem, numOfItems, qualityOfItems) => {
    
    for (let item of playerInventory) {
        console.log(item);
        if (item.name == addedItem.name) {
            item.qty
        } else {
            playerInventory.push(drug(addedItem.name, addedItem.price, numOfItems, qualityOfItems));
        }
    }
    
};

// Inventory function, perhaps use module pattern like calculator example from odin

const displayDrugMarket = () => {

}

const app = (() => {

})();


// const drugList = [
//     {
//         "name": "Cannabis Flower",
//         "priceRangeLow": 1,
//         "priceRange": 10,
//         "priceRangeHigh": 25,
//     },
//     {
//         "name": "Cannabis Extract",
//         "priceRangeLow": 5,
//         "priceRange": 30,
//         "priceRangeHigh": 100,
//     },
//     {
//         "name": "Acid",
//         "priceRangeLow": 3,
//         "priceRange": 15,
//         "priceRangeHigh": 50,
//     },
//     {
//         "name": "Cocaine",
//         "priceRangeLow": 40,
//         "priceRange": 120,
//         "priceRangeHigh": 300,
//     },
//     {
//         "name": "Crack",
//         "priceRangeLow": 18,
//         "priceRange": 70,
//         "priceRangeHigh": 180,
//     },
//     {
//         "name": "Heroin",
//         "priceRangeLow": 45,
//         "priceRange": 182,
//         "priceRangeHigh": 900,
//     },
//     {
//         "name": "Methamphetamine",
//         "priceRangeLow": 10,
//         "priceRange": 50,
//         "priceRangeHigh": 500,
//     },
// ];