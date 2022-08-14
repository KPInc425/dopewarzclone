import removeDrugsFromInventory from './removeDrugsFromInventory.js';
import { getPlayer1 } from './player.js';
import changeMoney from './changeMoney.js';
import updateCurrencyDisplay from './updateCurrencyDisplay.js';
import updateHealthDisplay from './updateHealthDisplay.js';
import { displayPlayerDrugInventory } from './displayDrugList.js';
import { editVendorDrugQty } from './drugFunctions.js';

// Sell items locally for cash
const sellItemsForCash = (removedItem, currentLocation, vendor, avgQuality) => {
    let player = getPlayer1();
    let totalPrice = removedItem.price * removedItem.quantity;
    console.log(removedItem);
    
    let saleResult = removeDrugsFromInventory(removedItem);

    if (saleResult == 1) {
        const clickedDrugQtyContainer = document.querySelector(`.container${removedItem.name.replace(" ", "")} .productQty > p`);
        let newQty = parseInt(clickedDrugQtyContainer.textContent) + removedItem.quantity;
        console.log(newQty);
        clickedDrugQtyContainer.textContent = newQty;
        editVendorDrugQty(removedItem);
        player.playerData.cashOnHand = changeMoney(player.playerData.cashOnHand, totalPrice);
        updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
        displayPlayerDrugInventory();
        return 1;
    } else {
        alert("How you gonna sell me something you ain't got mayne?")
        alert("You get sucker punched in the back of the head and...black...out...");
        player.changeHealth(-5);
        updateHealthDisplay(player.playerData.health);
        //Skip to next session of day
        console.log("You don't have this to sell!");
        return 0;
    }
};

export default sellItemsForCash;