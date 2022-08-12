import { defaultDrugList } from "./drugFunctions";
import el_buyOrSellClickedProduct from "./el_buyOrSellClickedProduct";

const displayDrugBuySellList = () => {
    const availableProductContainer = document.querySelector('.availableProductContainer');
    
    // get drugList 
    defaultDrugList.forEach((drug) => {
        let drugDataContainer = document.createElement('div');
        drugDataContainer.classList.add('productGrid');
        drugDataContainer.classList.add('availableProductData');

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
        // console.log(drug.price);
        // console.log(calculatedPrice);
        drugPrice.textContent = calculatedPrice;

        drugPriceContainer.appendChild(drugPrice);
        drugDataContainer.appendChild(drugPriceContainer);

        availableProductContainer.appendChild(drugDataContainer);
    })
    el_buyOrSellClickedProduct();

    
}

export {
    displayDrugBuySellList,
}