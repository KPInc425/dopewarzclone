import checkForItem from "./checkForItem";
import checkNumOfItemsHeld from "./checkNumOfItemsHeld";
import createDrug from "./createDrug";
import { getPlayer1 } from "./player.js";

// Remove Item from Inventory Function
const removeDrugsFromInventory = (removedItem) => {

    let player = getPlayer1();

    console.log(removedItem);
    let foundItem = checkForItem(removedItem);
    // console.log(foundItem);
    console.log(player.playerData.playerInventory);

    if (foundItem === null) {
        alert("You reach into your pockets and realize you've made a mistake...")
        console.log("You don't own this item.");
        return 0;
    }

    let index = foundItem.index;
    let item = player.playerData.playerInventory[index];
    if ((item.quantity - removedItem.quantity) < 0) {
        console.log(`You do not have enough for this transactions. You have ${item.quantity}g's left...`)
        return 0;
    } else if ((item.quantity - removedItem.quantity) == 0) {
        console.log("vvv Player Inventory vvv")
        console.log(player.playerData.playerInventory);
        // Remove object from array if quanitity is 0
        player.playerData.playerInventory.splice(index, 1);
        console.log("vvv Player Inventory vvv")

        player.playerData.currentNumOfItems = checkNumOfItemsHeld();
        // Re-add placeholder for empty inventory
        if (player.playerData.currentNumOfItems < 1) {
            player.playerData.playerInventory.push(createDrug("Nothing Here", 0, 0, 0));
        }
        return 1;
    } else {
        console.log(`Item Quantity: ${item.quantity}`);
        // Remove amt of items from object if there are more than removing
        item.quantity -= removedItem.quantity;
        console.log(`Item Quantity: ${item.quantity}`);
        return 1;
    }

};

export default removeDrugsFromInventory;