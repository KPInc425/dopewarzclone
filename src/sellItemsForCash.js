import removeDrugsFromInventory from './removeDrugsFromInventory.js';
import { getPlayer1 } from './player.js';
import changeMoney from './changeMoney.js';
import updateCurrencyDisplay from './updateCurrencyDisplay.js';

// Sell items locally for cash
const sellItemsForCash = (removedItem, currentLocation, vendor, avgQuality) => {
    let player = getPlayer1();
    let totalPrice = removedItem.price * removedItem.quantity;
    
    let saleResult = removeDrugsFromInventory(removedItem);

    if (saleResult == 1) {
        player.playerData.cashOnHand = changeMoney(player.playerData.cashOnHand, totalPrice);
        updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
        return 1;
    } else {
        console.log("You don't have this to sell!");
        return 0;
    }
};

export default sellItemsForCash;