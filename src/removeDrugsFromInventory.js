import checkForItem from "./checkForItem";

// Remove Item from Inventory Function
const removeDrugsFromInventory = (removedItem) => {

    let foundItem = checkForItem(removedItem);

    if (foundItem === null) {
        console.log("You don't own this item.");
        return 0;
    }

    let index = foundItem.index;
    let item = PLAYERINVENTORY[index];

    if ((item.quantity - removedItem.quantity) == 0) {
        console.log("vvv Player Inventory vvv")
        console.log(PLAYERINVENTORY);
        // Remove object from array if quanitity is 0
        PLAYERINVENTORY.splice(index, 1);
        console.log("vvv Player Inventory vvv")
        console.log(PLAYERINVENTORY);
        // Re-add placeholder for empty inventory
        PLAYERINVENTORY.push(createItem("Nothing Here", 0, 0, 0));
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