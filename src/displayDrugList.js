import el_buyOrSellClickedProduct from "./el_buyOrSellClickedProduct";
import { getPlayer1 } from "./player.js";

const displayDrugBuySellList = (drugList) => {
    const availableProductContainer = document.querySelector('.availableProductContainer');
    availableProductContainer.innerHTML = "";
    // get drugList 
    drugList.forEach((drug) => {
        let drugDataContainer = document.createElement('div');
        drugDataContainer.classList.add('productGrid');
        if (drug.quantity == 0) {
            drugDataContainer.classList.add('hidden');
        }
        drugDataContainer.classList.add('availableProductData');
        drugDataContainer.classList.add(`container${drug.name.replace(" ", "")}`);

        let drugNameContainer = document.createElement('div');
        drugNameContainer.classList.add('productName');
        let drugName = document.createElement('p');
        drugName.textContent = drug.name;

        drugNameContainer.appendChild(drugName);
        drugDataContainer.appendChild(drugNameContainer);

        let drugQtyContainer = document.createElement('div');
        drugQtyContainer.classList.add('productQty');
        let drugQty = document.createElement('p');
        drugQty.textContent = drug.quantity;

        drugQtyContainer.appendChild(drugQty);
        drugDataContainer.appendChild(drugQtyContainer);

        let drugPriceContainer = document.createElement('div');
        drugPriceContainer.classList.add('productPrice');
        let drugPrice = document.createElement('p');
        drugPrice.textContent = drug.price;

        drugPriceContainer.appendChild(drugPrice);
        drugDataContainer.appendChild(drugPriceContainer);

        availableProductContainer.appendChild(drugDataContainer);
    })
    el_buyOrSellClickedProduct();
}

const displayPlayerDrugInventory = () => {
    let player = getPlayer1();
    const productOnHandContainer = document.querySelector('.productOnHandContainer');
    productOnHandContainer.innerHTML = "";

    player.playerData.playerInventory.forEach((drug) => {
        let drugDataContainer = document.createElement('div');
        drugDataContainer.classList.add('productGrid');
        drugDataContainer.classList.add('playerInventoryData');

        let drugNameContainer = document.createElement('div');
        drugNameContainer.classList.add('productName');
        let drugName = document.createElement('p');
        drugName.textContent = drug.name;

        drugNameContainer.appendChild(drugName);
        drugDataContainer.appendChild(drugNameContainer);

        let drugQtyContainer = document.createElement('div');
        drugQtyContainer.classList.add('productQty');
        let drugQty = document.createElement('p');
        drugQty.textContent = drug.quantity;

        drugQtyContainer.appendChild(drugQty);
        drugDataContainer.appendChild(drugQtyContainer);

        let drugPriceContainer = document.createElement('div');
        drugPriceContainer.classList.add('productPrice');
        let drugPrice = document.createElement('p');

        drugPrice.textContent = drug.price;

        drugPriceContainer.appendChild(drugPrice);
        drugDataContainer.appendChild(drugPriceContainer);

        productOnHandContainer.appendChild(drugDataContainer);
    })

}

export {
    displayDrugBuySellList,
    displayPlayerDrugInventory,
}