import buyItemsWithCash from "./buyItemsWithCash";
import createDrug from "./createDrug";
import { getProductQtyFromInventory } from "./drugFunctions";
import { getProductQtyFromPlayerInventory } from "./player";
import sellItemsForCash from "./sellItemsForCash";

const displayBuySellUI = (productName, productQty, productPrice) => {
    const gameContainer = document.getElementById('gameContainer');

    const containerBuySellProduct = document.createElement('div');
    containerBuySellProduct.classList.add('containerBuySellProduct');

    const containerBuySellProductHeader = document.createElement('div');
    containerBuySellProductHeader.classList.add('buySellUIHeader');

    const labelProductName = document.createElement('h2');
    labelProductName.textContent = `${productName} at $${productPrice}/g`;

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btnCancel');
    btnCancel.textContent = 'X';

    containerBuySellProductHeader.appendChild(labelProductName);
    containerBuySellProductHeader.appendChild(btnCancel);
    containerBuySellProduct.appendChild(containerBuySellProductHeader);

    const gridBuySellProduct = document.createElement('div');
    gridBuySellProduct.classList.add('gridBuySell');

    const labelTotalCost = document.createElement('p');
    labelTotalCost.classList.add('labelTotalCost');
    labelTotalCost.textContent = '$0';

    const labelTotalGain = document.createElement('p');
    labelTotalGain.classList.add('labelTotalGain');
    labelTotalGain.textContent = '$0';

    const inputBuyProduct = document.createElement('input');
    inputBuyProduct.type = 'number';
    inputBuyProduct.min = 1;
    inputBuyProduct.value = 1;
    inputBuyProduct.max = getProductQtyFromInventory(productName);

    const inputSellProduct = document.createElement('input');
    inputSellProduct.type = 'number';
    inputSellProduct.min = 1;
    inputSellProduct.value = 1;
    let maxProductToSell = getProductQtyFromPlayerInventory(productName);
    inputSellProduct.max = maxProductToSell;
    if (maxProductToSell === 0) {
        inputSellProduct.min = 0;
        inputSellProduct.value = 0;
    }

    const btnBuyProduct = document.createElement('button');
    btnBuyProduct.classList.add('btnBuy');
    btnBuyProduct.textContent = 'Buy';

    const btnSellProduct = document.createElement('button');
    btnSellProduct.classList.add('btnSell');
    btnSellProduct.textContent = 'Sell';

    gridBuySellProduct.appendChild(labelTotalCost);
    gridBuySellProduct.appendChild(labelTotalGain);
    gridBuySellProduct.appendChild(inputBuyProduct);
    gridBuySellProduct.appendChild(inputSellProduct);
    gridBuySellProduct.appendChild(btnBuyProduct);
    gridBuySellProduct.appendChild(btnSellProduct);
    containerBuySellProduct.appendChild(gridBuySellProduct);

    gameContainer.appendChild(containerBuySellProduct);


    inputBuyProduct.addEventListener('input', () => {
        // console.log(inputBuyProduct.value);
        // console.log(productPrice);
        labelTotalCost.textContent = `$${inputBuyProduct.value * productPrice}`;             
    })
    inputSellProduct.addEventListener('input', () => {
        labelTotalGain.textContent = `$${inputSellProduct.value * productPrice}`;
    })
    btnCancel.addEventListener('click', () => {
        containerBuySellProduct.remove();
    })
    btnBuyProduct.addEventListener('click', () =>{
        // console.log('BuyProduct');
        // const clickedDrugContainer = document.querySelector(`.container${productName.replace(" ", "")}`)

        let boughtDrug = createDrug(productName, parseInt(productPrice), parseInt(inputBuyProduct.value));
        console.log(boughtDrug);
        buyItemsWithCash(boughtDrug)
        containerBuySellProduct.remove();
    })
    btnSellProduct.addEventListener('click', () =>{
        // console.log('SellProduct');
        let soldDrug = createDrug(productName, parseInt(productPrice), parseInt(inputSellProduct.value));
        console.log(soldDrug);
        sellItemsForCash(soldDrug);
        containerBuySellProduct.remove();
    })


}

export default displayBuySellUI;