// Check Player inventory for total items held
const checkNumOfItemsHeld = () => {
    let itemsHeld = 0;
    for (item of PLAYERINVENTORY) {
        itemsHeld += item.quantity;
    }

    return itemsHeld;
};

export default checkNumOfItemsHeld;