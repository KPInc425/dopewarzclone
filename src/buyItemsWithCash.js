import addDrugsToInventory from './addDrugsToInventory';
import changeMoney from './changeMoney';
import createDrug from './createDrug';
import { displayPlayerDrugInventory } from './displayDrugList';
import { editVendorDrugQty } from './drugFunctions';
import updateCurrencyDisplay from './updateCurrencyDisplay';

// Buy items Locally with Cash
const buyItemsWithCash = (addedItem, vendor, avgQuality) => {
    let player = window.player1;
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
        let newQty = parseInt(clickedDrugQtyContainer.textContent - addedItem.quantity);
        console.log(newQty);
        let enoughRoom = addDrugsToInventory(addedItem);
        if (enoughRoom) {
            let vendorDrug = createDrug(addedItem.name, addedItem.price, newQty, avgQuality);
            editVendorDrugQty(vendorDrug);
            clickedDrugQtyContainer.textContent = vendorDrug.quantity
            player.playerData.cashOnHand = changeMoney(player.playerData.cashOnHand, -totalPrice);
            updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
        }


        // Possible event goes here
        //if event goes well
            // Add drugs to inventory


        // else 
            // badEvent Scenario

        displayPlayerDrugInventory();
    }
};

export default buyItemsWithCash;