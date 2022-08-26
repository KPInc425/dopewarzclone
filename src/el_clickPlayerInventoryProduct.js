import { displayPlayerDrugInventory } from "./displayDrugList";
import { dumpAll, getPlayer1 } from "./player";
import updateInventoryAmountDisplay from "./updateInventoryAmountDisplay";

const el_clickedPlayerProduct = () => {
    const player = getPlayer1();
    const productNodeList = document.querySelectorAll('.productOnHandContainer');

    productNodeList.forEach((node) => {
        node.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            console.log('click');
            console.log(node);
            let productName = node.querySelector('.productName > p').textContent;
            console.log(productName);
            let productQty = node.querySelector('.productQty > p').textContent;
            console.log(productQty);
            let productPrice = node.querySelector('.productPrice > p').textContent;
            console.log(productPrice);

            let dump = confirm("Do you want to dump?");
            if (dump) {
                player.dumpProduct(productName);
                updateInventoryAmountDisplay();
                displayPlayerDrugInventory();
            }
        })
    })
}

export default el_clickedPlayerProduct;