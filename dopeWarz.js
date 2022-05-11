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
    const createLocalLocation = (locationName, avgQuality, priceRanking, services) => {
        locationName = locationName;        // Single String name of location
        avgQuality = avgQuality;            // Average Quality of products in the area
        priceRanking = priceRanking;        // Multiplier for prices in area
        services = services;                // Bank, Stores, Loanshark's, etc.
        policePresence = policePresence;    // How much heat is in the area generally

        return {
            locationName,
            avgQuality,
            priceRanking,
            services,
            policePresence
        }
    };

    // Variable to hold Locations after initiation >> allow player to add locations or use default locations
    //const LOCATIONS = [];

    // Default Local Locations
    const locationsLocalNewYork = [
        {
            locationName: "Bronx",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Queens",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Central Park",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Manhattan",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Coney Island",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Brooklyn",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalLosAngeles = [
        {
            locationName: "Hollywood",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "West Hollywood",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Downtown",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Beverly Hills",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "The Beaches",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Pasadena",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalChicago = [
        {
            locationName: "Humboldt Park",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Garfield Park",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "West Loop",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Old Town",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Roscoe Village",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Lincoln Park",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalHouston = [
        {
            locationName: "Downtown",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Spring",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Fort Bend",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Brazoria",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Galveston",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Lake Houston",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalPheonix = [
        {
            locationName: "Paradise Valley",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Mesa",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Glendale",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Peoria",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Apache Junction",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Scottsdale",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalPhiladelphia = [
        {
            locationName: "Chestnut Hill",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Roxborough",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Mount Airy",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "East Falls",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "German Town",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "West Oak Lane",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalJacksonville = [
        {
            locationName: "Downtown",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Springfield",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Eastside",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Sports Complex",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Fairfield",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Brentwood",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]
    // Default Local Locations
    const locationsLocalSeattle = [
        {
            locationName: "North Gate",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Green Lake",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "University District",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Capitol Hill",
            avgQuality: 0,                      //Bammer
            priceRanking: "",
            minQuantity: 0
            maxQuantity: 100,
            services: "",
            policePresence: "",
        },
        {
            locationName: "Sodo",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
        {
            locationName: "Magnolia",
            avgQuality: "",
            priceRanking: "",
            services: "",
            policePresence: "",
        },
    ]

    // Default City Location
    const locationCities = [
        {
            cityName: "New York City, NY",           
            cityDescription: `The Big Apple, where all the Wallstreet money is 
                              powdered coated and the ludes werent't left in 
                              the 80's`,  
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Los Angeles, CA",           
            cityDescription: `Home to celebrities, artists and free spirits, 
                              Los Angeles never stops attracting people from 
                              every corner of the globe. This cosmopolitan 
                              city offers a hub for the entertainment industry 
                              and easy access to the beach and those interested
                              in Candi!`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Chicago, IL",           
            cityDescription: `The city is famous for its iconic architecture and 
                              beautiful skyline. Those cold, bitter winters in Chicago
                              make the need for Fire dire!`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Houston, TX",           
            cityDescription: `Houston’s stable job market, diverse economy and livable 
                              neighborhoods make the Texas city a popular choice for 
                              young professionals. The night life is alive and well,
                              and so are the party favors that go with it.`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Pheonix, AZ",           
            cityDescription: `Surrounded by desert mountains and numerous hiking trails,
                              Phoenix is the perfect place to live for those who love 
                              spending time in the great outdoors getting 'attune' with
                              nature`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Philadelphia, PA",           
            cityDescription: `Besides being one of the most historically significant 
                              cities in the country, Philadelphia offers a hip arts 
                              scene, multiple music venues and plenty of trendy 
                              restaurants, the Hipsters are into 'desiners if you 
                              know what I mean.'`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Jacksonville, FL",           
            cityDescription: `Jacksonville, perfectly positioned along the Atlantic 
                              Ocean in Northeast Florida, is a natural paradise for 
                              visitors looking for an 'affordable' yet luxurious 
                              destination, with all the 'ammenities'.`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
        {
            cityName: "Seattle, WA",           
            cityDescription: `The CHAZ Zone has been indefinitely extended for your 
                              market, Visit Pike Place and the Pier to find plenty
                              of similar fellows and those willing to invest to 
                              new ideas and 'Start-Ups'`,    
            cityControl: "Unknown",        // Org that has current control of the city.
        },
    ]

    // Player Variables
    let player = {
        maxItems : 100,
        currentNumOfItems : 0,
        lostDrugs : [],
        cashOnHand : 0,
        bankAccount : 0,
        debt : 0,
        currentDay : 1,
        maxDays : 30,
        health : 100,
        luckLevel : 1, 
        currentLocationCity: "Seattle, WA",
        currentLocal: "Capitol Hill",
    }

    // Player Base Inventory 
    var PLAYERINVENTORY = [{
        name: "Nothing Here",
        quantity: 0,
        price: 0,
        quality: "None",
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

    // Default Drug List
    const drugList = [
        {
            name: "Cannabis Flower",
            price: 10,
        },
        {
            name: "Cannabis Extract",
            price: 30,
        },
        {
            name: "Acid",
            price: 15,
        },
        {
            name: "Cocaine",
            price: 120,
        },
        {
            name: "Crack",
            price: 70,
        },
        {
            name: "Heroin",
            price: 182,
        },
        {
            name: "Methamphetamine",
            price: 50,
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
    };

    const travelLocal = (destination) => {
        let eventOutcome;
        let randomEvent;

        // Check if we are already at location
        if (player.currentLocal = destination) {
            console.log("You are already here!")
        }

        // Possibility of Random Event (Make function)
        console.log("You are getting ready to travel.");
        console.log("Hope everything goes well...")
        console.log("~Checking for Random Event~");
        randomEvent = checkForRandomTravelEvent();
        // Update player locatin to new location
        if (randomEvent == true) {
            // Run random event
            console.log("Looks like something came up.");
            console.log("~Running Random Event~")
            eventOutcome = runRandomTravelEvent();
        }

        console.log("Looks like it's gonna be smooth sailing!");

        if (eventOutcome == true) {
            console.log(`Successful travel to ${destination}`);
            player.currentLocal = destination;
        } else {
            console.log(`Doesn't look like your going to make it today, ${eventOutcome} 
                         it gonna tie us up today`);
        }

    }


    const calculateItemCost = (price, multiplier) => {
        let currentCost = price * multiplier;
        return currentCost;
    }

    const calculateLocationQuantity = (location, multiplier) => {

        let currentQuantity;
        switch(multiplier) {
            case 0:
                console.log("Just a regular day in the neighborhood...")
                currentQuantity = (Math.floor(Math.random() * location.maxQuantity));
                break;
            case 1: 
                console.log("Business is good");
                currentQuantity = (Math.floor(Math.random() * location.maxQuantity) * 2);
                break;
            case 2: 
                console.log("The Market is Flooded!");
                currentQuantity = (Math.floor(Math.random() * location.maxQuantity) * 4);
                break;
            case -1: 
                console.log("Things are a little dry today...");
                currentQuantity = (Math.floor(Math.random() * location.maxQuantity) / 2);
                break;
            case -2:
                console.log("We in a drought, I would be surprised if you found any...");
                currentQuantity = (Math.floor(Math.random() * location.maxQuantity) / 4);
                break;
        }

        return currentQuantity;
        
    }

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
            todaysInventory.push(drug(name, price, quantity, quality));
        }
        console.log(todaysInventory);
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
