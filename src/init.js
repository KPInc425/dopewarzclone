
import updateLocationDisplay from './updateLocationDisplay.js';
import updateTransportationMethodDisplay from './updateTransportMethodDisplay.js';
import updateCurrencyDisplay from './updateCurrencyDisplay.js';
import updateHealthDisplay from './updateHealthDisplay.js';
import { displayDrugBuySellList, displayPlayerDrugInventory } from './displayDrugList.js';
import { setPlayer1 } from './player.js';
import { createDrugList, setCurrentDrugList } from './drugFunctions.js';
import { updateTravelButtons } from './updateTravelButtons.js';
import updateInventoryAmountDisplay from './updateInventoryAmountDisplay.js';
import { updateCurrentDayDisplay, updateTimeOfDayDisplay, updateTotalDaysDisplay } from './updateDaysDisplay.js';

const init = () => { 
    setPlayer1();
    let player = window.player1;
    const firstDrugList = createDrugList();
    setCurrentDrugList(firstDrugList);
    // console.log(player);

    // let welcomMessage1 = `What is up my new friend!? ${player.playerData.name} is the ` +
    //                      "name right? Of course I have heard good things, or we wouldn't " +
    //                      "be conversating here at the moment, would we?";

    updateLocationDisplay(player.playerData.currentLocal);
    updateTransportationMethodDisplay(player.playerData.currentTransportMethod);
    updateTravelButtons(player.playerData.currentLocationCity);
    updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
    // console.log(player.playerData.bankAccount);
    updateCurrencyDisplay('bankDisplay', player.playerData.bankAccount);
    updateCurrencyDisplay('debtDisplay', player.playerData.debt.value);
    updateHealthDisplay(player.playerData.health);


    
    displayDrugBuySellList(firstDrugList);
    displayPlayerDrugInventory();
    updateInventoryAmountDisplay();
    updateCurrentDayDisplay();
    updateTotalDaysDisplay();
    updateTimeOfDayDisplay();

}

export default init;