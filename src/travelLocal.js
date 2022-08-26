import { displayDrugBuySellList } from "./displayDrugList";
import { createDrugList, setCurrentDrugList } from "./drugFunctions";
import { getPlayer1 } from "./player";
import updateLocationDisplay from "./updateLocationDisplay";


const travelLocal = (destination) => {
    let player = window.player1;
    let eventOutcome;
    let randomEvent;

    // Check if we are already at location
    if (player.playerData.currentLocal == destination) {
        console.log("You are already here!")
        return 0;
    }

    // Possibility of Random Event (Make function)
    console.log("You are getting ready to travel.");
    console.log("Hope everything goes well...")
    console.log("~Checking for Random Event~");
    alert("You are getting ready to travel.");
    alert("Hope everything goes well...")
    alert("~Checking for Random Event~");
    // randomEvent = checkForRandomTravelEvent();
    // // Update player locatin to new location
    // if (randomEvent == true) {
    //     // Run random event
    //     console.log("Looks like something came up.");
    //     console.log("~Running Random Event~")
    //     eventOutcome = runRandomTravelEvent();
    // }

    console.log("Looks like it's gonna be smooth sailing!");
    alert("Looks like it's gonna be smooth sailing!");

    // if (eventOutcome == true) {
        console.log(`Successful travel to ${destination}`);
        alert(`Successful travel to ${destination}`);
        player.playerData.currentLocal = destination;
        let newDrugList = createDrugList()  // args(qtyMax, localMultiplier, luck)
        setCurrentDrugList(newDrugList);
        displayDrugBuySellList();
        updateLocationDisplay(destination)
    // } else {
    //     console.log(`Doesn't look like your going to make it today, ${eventOutcome} 
    //                  is gonna tie us up today`);
    // }

};

export default travelLocal;