const updateInventoryAmountDisplay = () => {
    const player = window.player1;
    const storageAmtDisplay = document.getElementById('inventoryAmtLabel');

    storageAmtDisplay.textContent = `${player.playerData.currentNumOfItems}/${player.playerData.maxItems}`;

}

export default updateInventoryAmountDisplay;