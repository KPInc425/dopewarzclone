import checkPriceAverage from './checkPriceAverage';
import createDrug from './createDrug';
import checkNumOfItemsHeld from './checkNumOfItemsHeld'

// Add Item to Inventory Function
const addDrugsToInventory = (addedItem) => {
    currentNumOfItems = checkNumOfItemsHeld();
    console.log(`Items Held: ${currentNumOfItems}g's`);
    // Check if inventory is full
    if (currentNumOfItems >= player.maxItems) {
        return console.log("You ain't got no more pockets!");
    }
    for (let item of PLAYERINVENTORY) {
        console.log(item);
        // Check if there will be inventory overflow
        if ((currentNumOfItems + addedItem.quantity) > player.maxItems) {
            // set overFlow by subtracting Total Inventory from new Total
            let overFlow = (currentNumOfItems + addedItem.quantity) - player.maxItems;
            console.log(`You dropped ${overFlow}g's of ${item.name}`);
            // Set new Item quantity for drugs
            item.quantity += (player.maxItems - currentNumOfItems);
            // ADD to lost drugs stash to use in other events
            LOSTDRUGS.push(createDrug(item.name, item.price, overFlow, item.quality));
        } else { // No Overflow
            // Check if already holding item
            if (item.name == addedItem.name) {
                console.log(item.quantity);

                // Add addedItem.quantity to total quantity in inventory
                item.quantity = item.quantity + addedItem.quantity;
                console.log(item.quantity);

                // Replace price with new average price
                console.log(item.price);
                item.price = checkPriceAverage(item, addedItem);
                console.log(item.price);
              
            } else {    // Add new drug to inventory  
                // Checks if Inventory is empty
                if (PLAYERINVENTORY[0].name == "Nothing Here") {
                    // Remove Placeholder
                    PLAYERINVENTORY.pop();
                }
                // Add new drug to inventory
                PLAYERINVENTORY.push(createDrug(addedItem.name, addedItem.price, addedItem.quantity, addedItem.quality));
                console.log(PLAYERINVENTORY);
            }
        }
    }  
};

export default addDrugsToInventory;