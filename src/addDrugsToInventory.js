import checkPriceAverage from './checkPriceAverage';
import createDrug from './createDrug';
import checkNumOfItemsHeld from './checkNumOfItemsHeld'
import { getPlayer1 } from './player.js';

// Add Item to Inventory Function
const addDrugsToInventory = (addedItem) => {
    let player = getPlayer1();
    let currentNumOfItems = checkNumOfItemsHeld();
    console.log(`Items Held: ${currentNumOfItems}g's`);
    // Check if inventory is full

    if (currentNumOfItems >= player.playerData.maxItems) {
        return console.log("You ain't got no more pockets!");
    }
    // Check for overFlow
    if ((currentNumOfItems + addedItem.quantity) > player.playerData.maxItems) {
        // set overFlow by subtracting Total Inventory from new Total
        let overFlow = (currentNumOfItems + addedItem.quantity) - player.playerData.maxItems;
        console.log(`You dropped ${overFlow}g's of ${addedItem.name}`);
        // Set new Item quantity for drugs
        addedItem.quantity = (player.playerData.maxItems - currentNumOfItems);
        // ADD to lost drugs stash to use in other events
        player.playerData.lostDrugs.push(createDrug(addedItem.name, addedItem.price, overFlow, addedItem.quality));
    }

    for (let item of player.playerData.playerInventory) {
        console.log(item);

        // Check if already holding item
        if (item.name === addedItem.name) {
            // console.log(item.quantity);

            // Add addedItem.quantity to total quantity in inventory
            item.quantity += addedItem.quantity;
            // console.log(item.quantity);

            // Replace price with new average price
            // console.log(item.price);
            item.price = checkPriceAverage(item, addedItem);
            // console.log(item.price);
            return console.log(player.playerData.playerInventory);
        } else {    // Add new drug to inventory  
            // Checks if Inventory is empty
            if (player.playerData.playerInventory[0].name == "Nothing Here") {
                // Remove Placeholder
                player.playerData.playerInventory.pop();
            }
            // Add new drug to inventory
            player.playerData.playerInventory.push(createDrug(addedItem.name, addedItem.price, addedItem.quantity, addedItem.quality));
            return console.log(player.playerData.playerInventory);
        }
    }  
};

export default addDrugsToInventory;