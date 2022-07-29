import player from "./player.js";

const updateHealthDisplay = () => {
    const healthDisplay = document.getElementById('healthDisplay');
    console.log(healthDisplay);
    healthDisplay.innerText = `${player.health}%`
}

export default updateHealthDisplay;
