const app = (() => {

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
    const location = (locationName, avgQuality, priceRanking, services) => {
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
        let averagePrice = (itemsHeld.price * itemsHeld.quantity) + 
                           (newItems.price * newItems.quantity) / 
                           (itemsHeld.quantity + newItems.quantity);

        return averagePrice;
    };

    // Add Item to Inventory Function
    const addDrugsToInventory = (addedItem, numOfItems, qualityOfItems) => {
        currentNumOfItems = checkNumOfItemsHeld();
        console.log(`Items Held: ${currentNumOfItems}g's`);
        // Check if inventory is full
        if (currentNumOfItems >= MAXITEMS) {
            return console.log("You ain't got no more pockets!");
        }
        for (let item of PLAYERINVENTORY) {
            console.log(item);
            // Check if there will be inventory overflow
            if ((currentNumOfItems + numOfItems) > MAXITEMS) {
                // set overFlow by subtracting Total Inventory from new Total
                let overFlow = (currentNumOfItems + numOfItems) - MAXITEMS;
                console.log(`You dropped ${overFlow}g's of ${item.name}`);
                // Set new Item quantity for drugs
                item.quantity += (MAXITEMS - currentNumOfItems);
                // ADD to lost drugs stash to use in other events
                let newAvgPrice = checkPriceAverage(item,addedItem);
                LOSTDRUGS.push(drug(item.name, newAvgPrice, overFlow, item.quality));
            } else { // No Overflow
                // Check if already holding item
                if (item.name == addedItem.name) {
                    console.log(item.quantity);
                    // Add numOfItems to total quantity in inventory
                    item.quantity = item.quantity + numOfItems;

                    console.log(item.quantity);
                // Add new drug to inventory    
                } else {
                    // Checks if Inventory is empty
                    if (PLAYERINVENTORY[0].name == "Nothing Here") {
                        // Remove Placeholder
                        PLAYERINVENTORY.pop();
                    }
                    // Add new drug to inventory
                    PLAYERINVENTORY.push(drug(addedItem.name, addedItem.price, numOfItems, qualityOfItems));
                    console.log(PLAYERINVENTORY);
                }
            }
        }  
    };

    // Remove Item from Inventory Function
    const removeDrugsFromInventory = () => {

    };

    // Buy items Local Items with Cash
    const buyItemsWithCash = (addedItem, numOfItems, location, vendor, avgQuality) => {
        let totalPrice = addedItem.price * numOfItems
        if (totalPrice > player.cashOnHand) {
            console.log("Too Broke!");
        } else {
            console.log(`Purchased ${numOfItems} of ${addItem.name} from ${vendor} in ${location}`)
            player.cashOnHand -= totalPrice;
            // Possible event goes here
            //if event goes well
                // Add drugs to inventory
                addDrugsToInventory(addedItem, numOfItems, qualityOfItems);
            // else 
                // badEvent Scenario
        }
    };




    const displayDrugMarket = () => {

    }

    // Testing
    let price = drugList[1].price;
    const addedItem = { "name": "Cannabis Flower","price": 10};
    const numOfItems = 420;
    const qualityOfItems = "AAA";
    // Testing

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
