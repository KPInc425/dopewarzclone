
import updateLocationDisplay from './updateLocationDisplay.js';
import updateTransportationMethodDisplay from './updateTransportMethodDisplay.js';
import updateCurrencyDisplay from './updateCurrencyDisplay.js';
import updateHealthDisplay from './updateHealthDisplay.js';
import createPlayer from './player.js';
import { displayDrugBuySellList } from './displayDrugList.js';

const init = (playerName, currentDay, maxDays, cashOnHand, bankAccount, debt, ...args) => { 
    let player1 = createPlayer("KPInc425",20,200,50000,20000,50000, ...args);

    let welcomMessage1 = `What is up my new friend!? ${player1.playerData.name} is the ` +
                         "name right? Of course I have heard good things, or we wouldn't " +
                         "be conversating here at the moment, would we?";
    let welcomeMEssage2 = "Well getting down to business... I don't touch the stuff my " + 
                          "self, but I know a guy and I have this stack of cash here to " +
                          "get you started. Hit up the local dealer and pick up the supplies " +
                          "needed to start your empire my friend! Sky's the limit and the " +
                        "only color we see is GREEEN!!";

    alert(welcomMessage1);
    alert(welcomeMEssage2);

    updateLocationDisplay(player1.playerData.currentLocal);
    updateTransportationMethodDisplay(player1.playerData.currentTransportMethod);
    updateCurrencyDisplay('cashDisplay', player1.playerData.cashOnHand);
    console.log(player1.playerData.bankAccount);
    updateCurrencyDisplay('bankDisplay', player1.playerData.bankAccount);
    updateCurrencyDisplay('debtDisplay', player1.playerData.debt);
    updateHealthDisplay(player1.playerData.health);

    displayDrugBuySellList();
}

export default init;