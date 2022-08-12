import { defaultDrugList } from "./drugFunctions";
import el_buyOrSellClickedProduct from "./el_buyOrSellClickedProduct";
import { getPlayer1 } from "./globalVariable.js";

const displayDrugBuySellList = () => {
    const availableProductContainer = document.querySelector('.availableProductContainer');
    availableProductContainer.innerHTML = "";
    // MAKE THIS MORE DYNAMIC TO TAKE ANY DRUGLIST
    // get drugList 
    defaultDrugList.forEach((drug) => {
        let drugDataContainer = document.createElement('div');
        drugDataContainer.classList.add('productGrid');
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
        drugQty.textContent = Math.floor(Math.random() * 100);

        drugQtyContainer.appendChild(drugQty);
        drugDataContainer.appendChild(drugQtyContainer);

        let drugPriceContainer = document.createElement('div');
        drugPriceContainer.classList.add('productPrice');
        let drugPrice = document.createElement('p');
        let coinFlip = Math.floor(Math.random() * 100);
        let calculatedPrice;
        if (coinFlip > 50) {
            calculatedPrice = Math.floor(drug.price + ((Math.floor(Math.random() * 20) / 100) * drug.price));
        } else {
            calculatedPrice = Math.floor(drug.price - ((Math.floor(Math.random() * 20) / 100) * drug.price));
        }
        drugPrice.textContent = calculatedPrice;

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
        let coinFlip = Math.floor(Math.random() * 100);
        let calculatedPrice;
        if (coinFlip > 50) {
            calculatedPrice = Math.floor(drug.price + ((Math.floor(Math.random() * 20) / 100) * drug.price));
        } else {
            calculatedPrice = Math.floor(drug.price - ((Math.floor(Math.random() * 20) / 100) * drug.price));
        }
        drugPrice.textContent = calculatedPrice;

        drugPriceContainer.appendChild(drugPrice);
        drugDataContainer.appendChild(drugPriceContainer);

        productOnHandContainer.appendChild(drugDataContainer);
    })

}

export {
    displayDrugBuySellList,
    displayPlayerDrugInventory,
}