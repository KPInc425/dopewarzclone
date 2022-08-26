const checkForLastDay = () => {
    if (window.player1.playerData.currentDay === window.player1.playerData.maxDays) {
        alert("This is your last day! Might want to get fluid!");

        let oldTravelContainer = document.querySelector('.travel');
        let newTravelContainer = oldTravelContainer.cloneNode(true);
        oldTravelContainer.parentNode.replaceChild(newTravelContainer, oldTravelContainer);
    }
}

export default checkForLastDay;