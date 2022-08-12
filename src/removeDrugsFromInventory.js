import checkForItem from "./checkForItem";
import createDrug from "./createDrug";
import { getPlayer1 } from "./globalVariable";

// Remove Item from Inventory Function
const removeDrugsFromInventory = (removedItem) => {

    let player = getPlayer1();
    let foundItem = checkForItem(removedItem);

    if (foundItem === null) {
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
        console.log(player.playerData.playerInventory);
        // Re-add placeholder for empty inventory
        player.playerData.playerInventory.push(createDrug("Nothing Here", 0, 0, 0));
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