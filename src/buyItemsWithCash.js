import addDrugsToInventory from './addDrugsToInventory';

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

export default buyItemsWithCash;