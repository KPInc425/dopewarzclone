import addDrugsToInventory from './addDrugsToInventory';
import changeMoney from './changeMoney';
import { getPlayer1 } from './globalVariable';
import updateCurrencyDisplay from './updateCurrencyDisplay';

// Buy items Locally with Cash
const buyItemsWithCash = (addedItem, vendor, avgQuality) => {
    let player = getPlayer1();
    console.log(player);
    let totalPrice = addedItem.price * addedItem.quantity;
    if (totalPrice > player.playerData.cashOnHand) {
        console.log("Too Broke!");
        alert('Too Broke!');
    } else {
        const clickedDrugQtyContainer = document.querySelector(`.container${addedItem.name.replace(" ", "")} .productQty > p`);
        console.log(`Purchased ${addedItem.quantity} of ${addedItem.name} from ${vendor} in ${player.playerData.currentLocal}`)
        // Didn't working changing money in changemoney function?
        player.playerData.cashOnHand = changeMoney(player.playerData.cashOnHand, -totalPrice);
        updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
        clickedDrugQtyContainer.textContent = clickedDrugQtyContainer.textContent - addedItem.quantity;
        // Possible event goes here
        //if event goes well
            // Add drugs to inventory
            addDrugsToInventory(addedItem);

        // else 
            // badEvent Scenario
    }
};

export default buyItemsWithCash;