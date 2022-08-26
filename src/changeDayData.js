import { updateCurrentDayDisplay } from "./updateDaysDisplay";

const changeCurrentDayData = (dayChange) => {
    window.player1.playerData.currentDay += dayChange;
    updateCurrentDayDisplay();
}

const changeTotalDayData = (totalDays) => {
    window.player1.playerData.maxDays += totalDays;
}

export {
    changeCurrentDayData,
    changeTotalDayData,
}