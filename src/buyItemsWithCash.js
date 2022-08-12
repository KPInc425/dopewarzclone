import addDrugsToInventory from './addDrugsToInventory';
import changeMoney from './changeMoney';
import createDrug from './createDrug';
import { displayPlayerDrugInventory } from './displayDrugList';
import { editVendorDrugQty } from './drugFunctions';
import { getPlayer1 } from './player.js';
import updateCurrencyDisplay from './updateCurrencyDisplay';

// Buy items Locally with Cash
const buyItemsWithCash = (addedItem, vendor, avgQuality) => {
    let player = getPlayer1();
    vendor = vendor || 'Local Dealer';
    avgQuality = avgQuality || 5.0;
    // console.log(player);
    let totalPrice = addedItem.price * addedItem.quantity;
    if (totalPrice > player.playerData.cashOnHand) {
        console.log("Too Broke!");
        alert('Too Broke!');
    } else {
        const clickedDrugQtyContainer = document.querySelector(`.container${addedItem.name.replace(" ", "")} .productQty > p`);
        // console.log(`Purchased ${addedItem.quantity} of ${addedItem.name} from ${vendor} in ${player.playerData.currentLocal}`)
        // Didn't working changing money in changemoney function?
        player.playerData.cashOnHand = changeMoney(player.playerData.cashOnHand, -totalPrice);
        updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);

        let newQty = clickedDrugQtyContainer.textContent - addedItem.quantity;

        let vendorDrug = createDrug(addedItem.name, addedItem.price, newQty, avgQuality);
        // console.log(vendorDrug);
        // console.log(addedItem);
        clickedDrugQtyContainer.textContent = vendorDrug.quantity

        // Possible event goes here
        //if event goes well
            // Add drugs to inventory
            editVendorDrugQty(vendorDrug);
            addDrugsToInventory(addedItem);

        // else 
            // badEvent Scenario

        displayPlayerDrugInventory();
    }
};

export default buyItemsWithCash;