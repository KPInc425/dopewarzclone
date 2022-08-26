    // Get Days container ref
const currentDayCountDisplay = document.getElementById('dayContainer');

const updateCurrentDayDisplay = () => {
    // console.log(currentDayCountDisplay);
    // Change currentDay display to current day value on player
    currentDayCountDisplay.querySelector('.dayCount #currentDayCount').textContent = window.player1.playerData.currentDay;
}

const updateTotalDaysDisplay = () => {
    currentDayCountDisplay.querySelector('.dayCount #totalDayCount').textContent = window.player1.playerData.maxDays;
}

const updateTimeOfDayDisplay = () => {
    currentDayCountDisplay.querySelector('.timeOfDay').textContent = window.player1.playerData.timeOfDay;
}

export {
    updateCurrentDayDisplay,
    updateTotalDaysDisplay,
    updateTimeOfDayDisplay,
}