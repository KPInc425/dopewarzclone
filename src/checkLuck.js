// Check luck using RNG and Current Luck Level of player
const checkLuck = (luckLevel) => {
    luckLevel = luckLevel;
    // Get random # between 0-100
    let luckRoll = Math.floor(Math.random() * Math.floor(Math.random() * 100));
    console.log(luckRoll);
    // Add percentage points baded on Luck Level
    luckRoll = luckRoll + (5 * luckLevel);
    console.log(luckRoll);

    return luckRoll;
};

export default checkLuck;