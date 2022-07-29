import addDrugsToInventory from './addDrugsToInventory';
import player from './player';
import changeMoney from './changeMoney';

// Buy items Locally with Cash
const buyItemsWithCash = (addedItem, vendor, avgQuality) => {
    let totalPrice = addedItem.price * addedItem.quantity;
    if (totalPrice > player.cashOnHand) {
        console.log("Too Broke!");
    } else {
        console.log(`Purchased ${addedItem.quantity} of ${addedItem.name} from ${vendor} in ${player.currentLocal}`)
        // Didn't working changing money in changemoney function?
        player.cashOnHand = changeMoney(player.cashOnHand, -totalPrice);

        // Possible event goes here
        //if event goes well
            // Add drugs to inventory
            addDrugsToInventory(addedItem);
        // else 
            // badEvent Scenario
    }
};

export default buyItemsWithCash;