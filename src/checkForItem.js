// Check inventory for Item helper function
const checkForItem = (itemToCheck) => {
    // https://flaviocopes.com/how-to-get-index-in-for-of-loop/
    for (let [index, item] of PLAYERINVENTORY.entries()) {
        if (item.name == itemToCheck.name) {
            console.log("Item found");
            return {
                "name": item.name,
                "index": index,
            }
        }
    console.log("Item not found.");    
    return null;
    }
};

export default checkForItem;