import player from "./player";

const travelLocal = (destination) => {
    let eventOutcome;
    let randomEvent;

    // Check if we are already at location
    if (player.currentLocal == destination) {
        console.log("You are already here!")
    }

    // Possibility of Random Event (Make function)
    console.log("You are getting ready to travel.");
    console.log("Hope everything goes well...")
    console.log("~Checking for Random Event~");
    // randomEvent = checkForRandomTravelEvent();
    // // Update player locatin to new location
    // if (randomEvent == true) {
    //     // Run random event
    //     console.log("Looks like something came up.");
    //     console.log("~Running Random Event~")
    //     eventOutcome = runRandomTravelEvent();
    // }

    console.log("Looks like it's gonna be smooth sailing!");

    // if (eventOutcome == true) {
        console.log(`Successful travel to ${destination}`);
        player.currentLocal = destination;
    // } else {
    //     console.log(`Doesn't look like your going to make it today, ${eventOutcome} 
    //                  it gonna tie us up today`);
    // }

};

export default travelLocal;