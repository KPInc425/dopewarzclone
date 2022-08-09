// Player Variables
const createPlayer = (...args) => {
    let playerData = {
        currentDay : args[0] || 1,
        maxDays : args[1] || 30,
        cashOnHand : args[2] || 5500,
        bankAccount : args[3] || 0,
        debt : args[4] || 5500,
        guns : args[5] || [],
        health : args[6] || 100,
        maxItems : args[7] || 100,
        currentNumOfItems : args[8] || 0,
        lostDrugs : args[9]|| [],
        luckLevel : args[10] || 1,  
        currentLocationCity: args[11] || "Seattle, WA" ,
        currentLocal: args[12] || "Capitol Hill",
        currentTransportMethod: args[13] || "on the Bus",     
    };

    return {
        playerData,
    }
}


export default createPlayer;