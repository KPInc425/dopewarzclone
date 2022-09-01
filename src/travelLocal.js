import changeTimeOfDay from "./changeTimeOfDay";
import { displayDrugBuySellList } from "./displayDrugList";
import displayNarrative from "./displayNarrative";
import { createDrugList, setCurrentDrugList } from "./drugFunctions";
import increaseInterestAmount from "./increaseInterestAmount";
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
    const message1 = "You are getting ready to travel.";
    const message2 = "Hope everything goes well...";
    const message3 = "~Checking for Random Event~";
    const message4 = "Looks like it's gonna be smooth sailing!";
    let narrative = [message1, message2, message3, message4];
    displayNarrative(narrative, travelSuccess);


    // randomEvent = checkForRandomTravelEvent();
    // // Update player locatin to new location
    // if (randomEvent == true) {
    //     // Run random event
    //     console.log("Looks like something came up.");
    //     console.log("~Running Random Event~")
    //     eventOutcome = runRandomTravelEvent();
    // }

    // console.log("Looks like it's gonna be smooth sailing!");


    function travelSuccess() {
            // if (eventOutcome == true) {
                console.log(`Successful travel to ${destination}`);
                displayNarrative([`Successful travel to ${destination}`], updateVariables);
                // alert(`Successful travel to ${destination}`);

                function updateVariables() {
                    player.playerData.currentLocal = destination;
                    let newDrugList = createDrugList()  // args(qtyMax, localMultiplier, luck)
                    setCurrentDrugList(newDrugList);
                    displayDrugBuySellList();
                    updateLocationDisplay(destination)
                    changeTimeOfDay();
                    increaseInterestAmount();
                }

        
            // } else {
            //     console.log(`Doesn't look like your going to make it today, ${eventOutcome} 
            //                  is gonna tie us up today`);
            // }
    }

};

export default travelLocal;