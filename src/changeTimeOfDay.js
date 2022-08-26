import checkForLastDay from "./checkForLastDay";
import { updateCurrentDayDisplay, updateTimeOfDayDisplay } from "./updateDaysDisplay";

const changeTimeOfDay = () => {
    // Number of parts of day are broken up depending on players current form of transport 4 tiers
    // Tier 1
    if (window.player1.playerData.currentTransportMethod === "on the Bus") {
        window.player1.playerData.currentDay++
        updateCurrentDayDisplay();
        checkForLastDay();
    // Tier 2
    } else if (window.player1.playerData.currentTransportMethod === "using ride Share") {
        if (window.player1.playerData.timeOfDay === "Morning") {
            window.player1.playerData.timeOfDay = "Evening";
            updateTimeOfDayDisplay();
        } else if (window.player1.playerData.timeOfDay === "Evening") {
            window.player1.playerData.currentDay++
            updateCurrentDayDisplay();
            checkForLastDay();
            window.player1.playerData.timeOfDay = "Morning";
            updateTimeOfDayDisplay();
        }
    // Tier 3
    } else if (window.player1.playerData.currentTransportMethod === "in Used Luxury Vehicle") {
        if (window.player1.playerData.timeOfDay === "Morning") {
            window.player1.playerData.timeOfDay = "Afternoon";
            updateTimeOfDayDisplay();
        } else if (window.player1.playerData.timeOfDay === "Afternoon") {
            window.player1.playerData.timeOfDay = "Evening";
            updateTimeOfDayDisplay();
        }  else if (window.player1.playerData.timeOfDay === "Evening") {
            window.player1.playerData.currentDay++
            updateCurrentDayDisplay();
            checkForLastDay();
            window.player1.playerData.timeOfDay = "Morning";
            updateTimeOfDayDisplay();
        }
    // Tier 4
    } else if (window.player1.playerData.currentTransportMethod === "with personal Driver") {
        if (window.player1.playerData.timeOfDay === "Morning") {
            window.player1.playerData.timeOfDay = "Afternoon";
            updateTimeOfDayDisplay();
        } else if (window.player1.playerData.timeOfDay === "Afternoon") {
            window.player1.playerData.timeOfDay = "Evening";
            updateTimeOfDayDisplay();
        } else if (window.player1.playerData.timeOfDay === "Evening") {
            window.player1.playerData.timeOfDay = "Night";
            updateTimeOfDayDisplay();
        } else if (window.player1.playerData.timeOfDay === "Night") {
            window.player1.playerData.currentDay++
            updateCurrentDayDisplay();
            checkForLastDay();
            window.player1.playerData.timeOfDay = "Morning";
            updateTimeOfDayDisplay();
        }
    }

}

export default changeTimeOfDay;