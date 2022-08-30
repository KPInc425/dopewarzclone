const updatePlayerStatDisplay = (statLabel, value) => {
    const locationDisplay = document.getElementById(statLabel);
    // console.log(locationDisplay);
    locationDisplay.innerText = value;
}

export default updatePlayerStatDisplay;