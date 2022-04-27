// const app = (() => {

    // Drug Factory Function
    const drug = (name, price, quantity, quality) => {
        name = name;            // Street Name
        quantity = quantity;    // Grams
        price = price;          // Dollars
        quality = quality;      // Grade System

        return {
            name,
            quantity,
            price,
            quality,
        }
    };

    const nonDrugItem = (name, price, quantity, ability) => {
        name = name;            // Item Name
        quantity = quantity;    // Grams
        price = price;          // Dollars
        ability = ability;      // function name

        return {
            name,
            quantity,
            price,
            quality,
        }
    };


    // Location Factory Function
    const createLocation = (locationName, avgQuality, priceRanking, services) => {
        locationName = locationName;        // Single String name of location
        avgQuality = avgQuality;            // Average Quality of products in the area
        priceRanking = priceRanking;        // Multiplier for prices in area
        services = services;                // Bank, Stores, Loanshark's, etc.
        policePresence = policePresence;    // How much heat is in the area generally

        return {
            locationName,
            avgQuality,
            priceRanking,
            services
        }
    };

    // Variable to hold Locations after initiation >> allow player to add locations or use default locations
    //const LOCATIONS = [];

    // Default Local Locations
    const locationsLocal = [
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
        {
            locationName: "",
            avgQuality: "",
            priceRanking: "",
            services: ""
        },
    ]

    // Default City Location
    const locationCities = [
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        },
        {
            cityName: "",           
            cityDescription: "",    
            cityControl: "",        // Org that has current control of the city.
        }
    ]

    // Player Base Inventory 
    var PLAYERINVENTORY = [{
        "name": "Nothing Here",
        "quantity": 0,
        "price": 0,
        "quality": "None",
    }];

    // Check Player inventory for total items held
    const checkNumOfItemsHeld = () => {
        let itemsHeld = 0;
        for (item of PLAYERINVENTORY) {
            itemsHeld += item.quantity;
        }

        return itemsHeld;
    };

    // Check inventory for Item helper function
    const checkForItem = (itemToCheck) => {
        // https://flaviocopes.com/how-to-get-index-in-for-of-loop/
        for (let [index, item] of PLAYERINVENTORY.entries()) {
            if (item.name == itemToCheck.name) {
                console.log("Item found");
                return {
                    "name": item.name,
                    "index": index,
                }
            }
        console.log("Item not found.");    
        return null;
        }
    };

    // Player Variables
    let player = {
        maxItems : 100,
        currentNumOfItems : checkNumOfItemsHeld(),
        lostDrugs : [],
        cashOnHand : 0,
        bankAccount : 0,
        debt : 0,
        currentDay : 1,
        maxDays : 30,
        health : 100,
        luckLevel : 1,  
    }

    // Default Drug List
    const drugList = [
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

    // Check luck using RNG and Current Luck Level of player
    const checkLuck = (luckLevel) => {
        luckLevel = luckLevel;
        // Get random # between 0-100
        let luckRoll = Math.floor(Math.random() * Math.floor(Math.random() * 100));
        console.log(luckRoll);
        // Add percentage points baded on Luck Level
        luckRoll = luckRoll + (5 * luckLevel);
        console.log(luckRoll);

        return luckRoll;
    };


    // Check Quality using luck and average quality in location
    const qualityCheck = (avgQuality) => {
        let luck = checkLuck();
        console.log(luck);
        qualityIndex = (avgQuality * luck);

        return qualityIndex
    };

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

    // Price AVG function
    const checkPriceAverage = (itemsHeld, newItems) => {
        let averagePrice = ((itemsHeld.price * itemsHeld.quantity) + 
                           (newItems.price * newItems.quantity)) / 
                           (itemsHeld.quantity + newItems.quantity);
        console.log(`AveragePrice: ${averagePrice}`);
        averagePrice= Math.round(averagePrice);

        return averagePrice;
    };

    // Add Item to Inventory Function
    const addDrugsToInventory = (addedItem) => {
        currentNumOfItems = checkNumOfItemsHeld();
        console.log(`Items Held: ${currentNumOfItems}g's`);
        // Check if inventory is full
        if (currentNumOfItems >= player.maxItems) {
            return console.log("You ain't got no more pockets!");
        }
        for (let item of PLAYERINVENTORY) {
            console.log(item);
            // Check if there will be inventory overflow
            if ((currentNumOfItems + addedItem.quantity) > player.maxItems) {
                // set overFlow by subtracting Total Inventory from new Total
                let overFlow = (currentNumOfItems + addedItem.quantity) - player.maxItems;
                console.log(`You dropped ${overFlow}g's of ${item.name}`);
                // Set new Item quantity for drugs
                item.quantity += (player.maxItems - currentNumOfItems);
                // ADD to lost drugs stash to use in other events
                LOSTDRUGS.push(drug(item.name, item.price, overFlow, item.quality));
            } else { // No Overflow
                // Check if already holding item
                if (item.name == addedItem.name) {
                    console.log(item.quantity);

                    // Add addedItem.quantity to total quantity in inventory
                    item.quantity = item.quantity + addedItem.quantity;
                    console.log(item.quantity);

                    // Replace price with new average price
                    console.log(item.price);
                    item.price = checkPriceAverage(item, addedItem);
                    console.log(item.price);
                  
                } else {    // Add new drug to inventory  
                    // Checks if Inventory is empty
                    if (PLAYERINVENTORY[0].name == "Nothing Here") {
                        // Remove Placeholder
                        PLAYERINVENTORY.pop();
                    }
                    // Add new drug to inventory
                    PLAYERINVENTORY.push(drug(addedItem.name, addedItem.price, addedItem.quantity, addedItem.quality));
                    console.log(PLAYERINVENTORY);
                }
            }
        }  
    };

    // Buy items Locally with Cash
    const buyItemsWithCash = (addedItem, currentLocation, vendor, avgQuality) => {
        let totalPrice = addedItem.price * addedItem.quantity;
        if (totalPrice > player.cashOnHand) {
            console.log("Too Broke!");
        } else {
            console.log(`Purchased ${addedItem.quantity} of ${addedItem.name} from ${vendor} in ${currentLocation}`)
            player.cashOnHand -= totalPrice;
            // Possible event goes here
            //if event goes well
                // Add drugs to inventory
                addDrugsToInventory(addedItem);
            // else 
                // badEvent Scenario
        }
    };

    // Remove Item from Inventory Function
    const removeDrugsFromInventory = (removedItem) => {

        let foundItem = checkForItem(removedItem);

        if (foundItem === null) {
            console.log("You don't own this item.");
            return 0;
        }

        let index = foundItem.index;
        let item = PLAYERINVENTORY[index];

        if ((item.quantity - removedItem.quantity) == 0) {
            console.log("vvv Player Inventory vvv")
            console.log(PLAYERINVENTORY);
            // Remove object from array if quanitity is 0
            PLAYERINVENTORY.splice(index, 1);
            console.log("vvv Player Inventory vvv")
            console.log(PLAYERINVENTORY);
            // Re-add placeholder for empty inventory
            PLAYERINVENTORY.push(drug("Nothing Here", 0, 0, 0));
            return 1;
        } else {
            console.log(`Item Quantity: ${item.quantity}`);
            // Remove amt of items from object if there are more than removing
            item.quantity -= removedItem.quantity;
            console.log(`Item Quantity: ${item.quantity}`);
            return 1;
        }

    };



    // Sell items locally for cash
    const sellItemsForCash = (removedItem, currentLocation, vendor, avgQuality) => {
        let totalPrice = removedItem.price * removedItem.quantity;
        
        let saleResult = removeDrugsFromInventory(removedItem);

        if (saleResult == 1) {
            player.cashOnHand += totalPrice;
            return 1;
        } else {
            console.log("You don't have this to sell!");
            return 0;
        }
    }



    const displayDrugMarket = () => {

    }

    // Testing
    let price = drugList[1].price;
    const addedItem = { "name": "Cannabis Flower","price": 10, "quantity": 10, "quality": 3};
    const removedItem = { "name": "Cannabis Flower","price": 10, "quantity": 10, "quality": 3};
    // const numOfItems = 420;
    // const qualityOfItems = "AAA";
    // Testing

// })();


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
