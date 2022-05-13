// Gives a random chance to increase/decrease price by a percentage
const randomFluctuations = (percentage) => {
    let moreOrLess = Math.floor(Math.random() * 100);
    if (moreOrLess > 50) {
        percentage = Math.floor(Math.random() * percentage);
    } else {
        percentage = Math.floor(Math.random() * percentage) * -1;
    }
    return percentage;
}

export default randomFluctuations;