import travelLocal from "./travelLocal";

// Default City Location
const locationCities = [
    {
        cityName: "New York City, NY",           
        cityDescription: `The Big Apple, where all the Wallstreet money is 
                            powdered coated and the ludes werent't left in 
                            the 80's`,  
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Bronx",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Queens",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Central Park",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Manhattan",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Coney Island",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Brooklyn",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
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
        // Default Local Locations
        locationsLocal: [
            {
                locationName: "Hollywood",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "West Hollywood",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Downtown",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Beverly Hills",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "The Beaches",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Pasadena",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Chicago, IL",           
        cityDescription: `The city is famous for its iconic architecture and 
                            beautiful skyline. Those cold, bitter winters in Chicago
                            make the need for Fire dire!`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Humboldt Park",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Garfield Park",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "West Loop",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Old Town",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Roscoe Village",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Lincoln Park",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Houston, TX",           
        cityDescription: `Houston’s stable job market, diverse economy and livable 
                            neighborhoods make the Texas city a popular choice for 
                            young professionals. The night life is alive and well,
                            and so are the party favors that go with it.`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Downtown",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Spring",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Fort Bend",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Brazoria",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Galveston",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Lake Houston",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Pheonix, AZ",           
        cityDescription: `Surrounded by desert mountains and numerous hiking trails,
                            Phoenix is the perfect place to live for those who love 
                            spending time in the great outdoors getting 'attune' with
                            nature`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Paradise Valley",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Mesa",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Glendale",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Peoria",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Apache Junction",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Scottsdale",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Philadelphia, PA",           
        cityDescription: `Besides being one of the most historically significant 
                            cities in the country, Philadelphia offers a hip arts 
                            scene, multiple music venues and plenty of trendy 
                            restaurants, the Hipsters are into 'desiners if you 
                            know what I mean.'`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Chestnut Hill",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Roxborough",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Mount Airy",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "East Falls",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "German Town",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "West Oak Lane",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Jacksonville, FL",           
        cityDescription: `Jacksonville, perfectly positioned along the Atlantic 
                            Ocean in Northeast Florida, is a natural paradise for 
                            visitors looking for an 'affordable' yet luxurious 
                            destination, with all the 'ammenities'.`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "Downtown",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Springfield",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Eastside",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Sports Complex",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Fairfield",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Brentwood",
                avgQuality: "",
                priceRanking: "",
                minQuantity: 0,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
        ],
    },
    {
        cityName: "Seattle, WA",           
        cityDescription: `The CHAZ Zone has been indefinitely extended for your 
                            market, Visit Pike Place and the Pier to find plenty
                            of similar fellows and those willing to invest to 
                            new ideas and 'Start-Ups'`,    
        cityControl: "Unknown",        // Org that has current control of the city.
            // Default Local Locations
        locationsLocal: [
            {
                locationName: "North Gate",
                avgQuality: 1,
                priceRanking: 1,
                minQuantity: 0,
                maxQuantity: 75,
                services: ['bank'],
                policePresence: "",
            },
            {
                locationName: "Green Lake",
                avgQuality: 1,
                priceRanking: 1.25,
                minQuantity: 20,
                maxQuantity: 150,
                services: ['shark'],
                policePresence: "",
            },
            {
                locationName: "University District",
                avgQuality: 3,
                priceRanking: 2.5,
                minQuantity: 0,
                maxQuantity: 50,
                services: ['party'],
                policePresence: "",
            },
            {
                locationName: "Capitol Hill",
                avgQuality: 1,                      //Bammer
                priceRanking: 1.5,
                minQuantity: 10,
                maxQuantity: 100,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Sodo",
                avgQuality: 1,
                priceRanking: 0.75,
                minQuantity: 0,
                maxQuantity: 200,
                services: "",
                policePresence: "",
            },
            {
                locationName: "Magnolia",
                avgQuality: 1,
                priceRanking: 1.25,
                minQuantity: 0,
                maxQuantity: 250,
                services: "",
                policePresence: "",
            },
        ],
    },
]

const getLocationsByName = (locationName) => {
    for (let location of locationCities) {
        // console.log(location);
        if (location.cityName == locationName) {
            return location;
        }
    }
}

// const el_travelLocationClicked = () => {
//     const 
// }

const updateTravelButtons = (city) => {
    const travelButtonNodeList = document.querySelectorAll('.locationContainer button');
    // console.log(city);
    const playerCity = getLocationsByName(city);
    // console.log(travelButtonNodeList);
    // console.log(playerCity);

    let i = 0;
    travelButtonNodeList.forEach((metroBtn) => {
        metroBtn.textContent = playerCity.locationsLocal[i].locationName;
        metroBtn.id = playerCity.locationsLocal[i].locationName.replace(' ', '');
        metroBtn.addEventListener('click', () =>{
            // console.log(metroBtn.textContent);
            travelLocal(metroBtn.textContent);
        })
        i++;
    })
}



export {
    updateTravelButtons,
}