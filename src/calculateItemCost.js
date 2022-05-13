import randomFluctuations from "./randomFluctuations";

const calculateItemCost = (price, multiplier) => {

    let currentCost;

    switch(multiplier) {
        case 0:
            console.log("Capacetic Pricing.")
            currentCost = price + (price * randomFluctuations(10));
            break;
        case 1: 
            console.log("Prices are down");
            currentCost = (price + (price * randomFluctuations(10)) / 2);
            break;
        case 2: 
            console.log("Cheap Cheap Product!");
            currentCost = currentCost = (price + (price * randomFluctuations(10)) / 4);;
            break;
        case -1: 
            console.log("Stuff is getting pricy!");
            currentCost = (price + (price * randomFluctuations(10)) * 2);
            break;
        case -2:
            console.log("It is NOT a buyers market!");
            currentCost = currentCost = (price + (price * randomFluctuations(10)) * 4);
            break;
    }

    return currentCost;

};

export default calculateItemCost;