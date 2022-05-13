import './styles.css';
import './D5zdtk0.jpeg';
import createItem from './createItem';
import createNonDrugItem from './createNonDrugItem';
import createLocalLocation from './createLocalLocation';
import checkNumOfItemsHeld from './checkNumOfItems';
import checkLuck from './checkLuck';
import qualityCheck from './qualityCheck';
import priceRange from './priceRange';
import travelLocal from './travelLocal';
import player from './player';


// const app = (() => {


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
            minQuantity: 0,
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

    // // Player Variables
    // let player = {
    //     maxItems : 100,
    //     currentNumOfItems : 0,
    //     lostDrugs : [],
    //     cashOnHand : 0,
    //     bankAccount : 0,
    //     debt : 0,
    //     currentDay : 1,
    //     maxDays : 30,
    //     health : 100,
    //     luckLevel : 1, 
    //     currentLocationCity: "Seattle, WA",
    //     currentLocal: "Capitol Hill",
    // }

    // Player Base Inventory 
    var PLAYERINVENTORY = [{
        name: "Nothing Here",
        quantity: 0,
        price: 0,
        quality: "None",
    }];

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


    const formatter = new Intl.NumberFormat({
        style: 'currency'
    });

    const updateCurrencyDisplay = (selector, value) => {
        const currencyDisplay = document.getElementById(selector);
        let newValue = formatter.format(value);
        console.log(currencyDisplay);
        currencyDisplay.innerText = `$${newValue}`;
    };

    // travelLocal(`KP's House`);

    const updateLocationDisplay = (value) => {
        const locationDisplay = document.getElementById('currentLocation');
        console.log(locationDisplay);
        locationDisplay.innerText = value;
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
