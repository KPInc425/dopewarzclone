const updateLocationDisplay = (value) => {
    const locationDisplay = document.getElementById('currentLocation');
    console.log(locationDisplay);
    locationDisplay.innerText = value;
}

export default updateLocationDisplay;