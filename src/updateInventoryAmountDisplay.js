import { getPlayer1 } from "./player";

const updateInventoryAmountDisplay = () => {
    const player = getPlayer1();
    const storageAmtDisplay = document.getElementById('inventoryAmtLabel');

    storageAmtDisplay.textContent = `${player.playerData.currentNumOfItems}/${player.playerData.maxItems}`;

}

export default updateInventoryAmountDisplay;