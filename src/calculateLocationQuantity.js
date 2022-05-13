const calculateLocationQuantity = (location, multiplier) => {

    let currentQuantity;
    switch(multiplier) {
        case 0:
            console.log("Just a regular day in the neighborhood...")
            currentQuantity = (Math.floor(Math.random() * location.maxQuantity));
            break;
        case 1: 
            console.log("Business is good");
            currentQuantity = (Math.floor(Math.random() * location.maxQuantity) * 2);
            break;
        case 2: 
            console.log("The Market is Flooded!");
            currentQuantity = (Math.floor(Math.random() * location.maxQuantity) * 4);
            break;
        case -1: 
            console.log("Things are a little dry today...");
            currentQuantity = (Math.floor(Math.random() * location.maxQuantity) / 2);
            break;
        case -2:
            console.log("We in a drought, I would be surprised if you found any...");
            currentQuantity = (Math.floor(Math.random() * location.maxQuantity) / 4);
            break;
    }

    return currentQuantity;
    
};

export default calculateLocationQuantity;