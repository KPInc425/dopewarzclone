import { getPlayer1 } from "./player.js";

// Check Player inventory for total items held
const checkNumOfItemsHeld = () => {
    let player = window.player1;
    let itemsHeld = 0;
    for (let item of player.playerData.playerInventory) {
        itemsHeld += item.quantity;
    }
    return itemsHeld;
};

export default checkNumOfItemsHeld;