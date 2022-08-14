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