import createDrug from "./createDrug";

const createPlayer = (...args) => {
    let playerData = {
        name : args[0] || "That Dope Guy",
        currentDay : args[1] || 1,
        maxDays : args[2] || 30,
        cashOnHand : args[3] || 2000,
        bankAccount : args[4] || 0,
        debt : args[5] || 2500,
        guns : args[6] || [],
        health : args[7] || 100,
        maxItems : args[8] || 100,
        currentNumOfItems : args[9] || 0,
        lostDrugs : args[10]|| [],
        luckLevel : args[11] || 1,  
        currentLocationCity: args[12] || "Seattle, WA" ,
        currentLocal: args[13] || "Capitol Hill",
        currentTransportMethod: args[14] || "on the Bus", 
        timeOfDay : args[15] || "Morning",
        playerInventory: [{
            name: "Nothing Here",
            quantity: 0,
            price: 0,
            quality: "None",    
        }],
    }

    const changeHealth = (change) => {
        playerData.health += change;
        console.log(`Player Health: ${playerData.health}`);
    }

    // const playerInventory = [{
    //     name: "Nothing Here",
    //     quantity: 0,
    //     price: 0,
    //     quality: "None",
    // }];

    // Refactor this into its own module
    const dumpProduct = (productName) => {
        console.log(playerData.playerInventory)
        for (let [index, drug] of playerData.playerInventory.entries()) {
            console.log(drug);
            if (drug.name === productName) {
                playerData.playerInventory.splice(index, 1);
                playerData.currentNumOfItems -= drug.quantity;
                if (playerData.currentNumOfItems < 1) {
                    playerData.playerInventory.push(createDrug("Nothing Here", 0, 0, 0));
                }
                playerData.lostDrugs.push(drug);
                console.log(playerData.lostDrugs);
                break;
            }
        }
    }

// playerName, currentDay, maxDays, cashOnHand, bankAccount, debt

    return {
        playerData,
        changeHealth,
        // playerInventory,
        dumpProduct,
    }
}

const setPlayer1 = (...args) => {
    if (args.length < 1) {
        window.player1 = createPlayer();
    }
}


const getProductQtyFromPlayerInventory = (drugName) => {
    console.log(drugName);
    console.log(window.player1.playerData.playerInventory);
    for (let drug of window.player1.playerData.playerInventory) {
        console.log(drug);
        if (drug.name === drugName) {
            // console.log(drug.quantity);
            return drug.quantity;
        } 
    }

    return 0;
}

const dumpAll = (player) => {
    player.playerData.playerInventory = [];
    player.playerData.playerInventory.push(createDrug("Nothing Here", 0, 0, 0));
    player.playerData.currentNumOfItems = 0;
}



export {
    createPlayer, 
    setPlayer1,
    getProductQtyFromPlayerInventory,
    dumpAll,
}