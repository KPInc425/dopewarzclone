import removeDrugsFromInventory from './addDrugsToInventory';

// Sell items locally for cash
const sellItemsForCash = (removedItem, currentLocation, vendor, avgQuality) => {
    let totalPrice = removedItem.price * removedItem.quantity;
    
    let saleResult = removeDrugsFromInventory(removedItem);

    if (saleResult == 1) {
        player.cashOnHand += totalPrice;
        return 1;
    } else {
        console.log("You don't have this to sell!");
        return 0;
    }
};

export default sellItemsForCash;