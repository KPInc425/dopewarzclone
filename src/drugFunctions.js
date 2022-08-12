import createDrug from "./createDrug";

let currentDrugList = [];

// Default Drug List
const defaultDrugList = [
    {
        name: "Cannabis Flower",
        price: 10,
    },
    {
        name: "Cannabis Extract",
        price: 30,
    },
    {
        name: "Acid",
        price: 15,
    },
    {
        name: "Cocaine",
        price: 120,
    },
    {
        name: "Crack",
        price: 70,
    },
    {
        name: "Heroin",
        price: 95,
    },
    {
        name: "Methamphetamine",
        price: 50,
    },
];

const createDrugList = (...args) => {
    // args(qtyMax, localMultiplier, luck)
    let newDrugList = [];

    defaultDrugList.forEach((drug) => {
        let coinFlip = Math.floor(Math.random() * 100);
        let calculatedPrice;
        let qtyMax = args[0] || 100;
        let localMultiplier = args[1] || 1;
        let luck = args[2] || 0;
        let luckEffect = (1 + (luck * 0.1))
        let luckMultiplier = (50 - luck) || 50;
         
        

        if (coinFlip > luckMultiplier) {
            calculatedPrice = Math.floor(drug.price + ((Math.floor(Math.random() * 20) / 100) * drug.price));
        } else {
            calculatedPrice = Math.floor(drug.price - ((Math.floor(Math.random() * 20) / 100) * drug.price));
        }

        let calculatedQty = Math.floor(((Math.random() * qtyMax) * localMultiplier) * luckEffect);


        newDrugList.push(createDrug(drug.name, calculatedPrice, calculatedQty));
    })

    return newDrugList;
}

const editVendorDrugQty = (changedDrug) => {
    // console.log(changedDrug);
    currentDrugList.forEach((drug) => {
        if (drug.name === changedDrug.name) {
            // console.log(drug);
            drug.quantity = changedDrug.quantity;
            // console.log(drug);
        }
    })
}

const setCurrentDrugList = (drugList) => {
    currentDrugList = drugList;
}

const getCurrentDrugList = () => {
    return currentDrugList;
}

const getProductQtyFromInventory = (drugName) => {
    console.log(drugName);
    for (let drug of currentDrugList) {
        console.log(drug);
        if (drug.name === drugName) {
            console.log(drug.quantity);
            return drug.quantity;
        }
    }

}

export {
    defaultDrugList,
    createDrugList,
    editVendorDrugQty,
    setCurrentDrugList,
    getCurrentDrugList,
    getProductQtyFromInventory,
}