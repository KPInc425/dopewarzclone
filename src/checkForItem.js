import { getPlayer1 } from "./player.js";

// Check inventory for Item helper function
const checkForItem = (itemToCheck) => {
    let player = getPlayer1();
    // https://flaviocopes.com/how-to-get-index-in-for-of-loop/
    for (let [index, item] of player.playerData.playerInventory.entries()) {
        console.log(item);
        if (item.name == itemToCheck.name) {
            console.log("Item found");
            return {
                "name": item.name,
                "index": index,
            }
        }
    }
    console.log("Item not found.");    
    return null;
};

export default checkForItem;