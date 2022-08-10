const updateHealthDisplay = (currentHealth) => {
    const healthDisplay = document.getElementById('healthDisplay');
    console.log(healthDisplay);
    healthDisplay.innerText = `${currentHealth}hp`
}

export default updateHealthDisplay;
