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

export default createLocalLocation;