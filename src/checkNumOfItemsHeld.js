import { getPlayer1 } from "./globalVariable";

// Check Player inventory for total items held
const checkNumOfItemsHeld = () => {
    let player = getPlayer1();
    let itemsHeld = 0;
    for (let item of player.playerData.playerInventory) {
        itemsHeld += item.quantity;
    }
    return itemsHeld;
};

export default checkNumOfItemsHeld;