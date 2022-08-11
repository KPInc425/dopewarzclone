
import updateLocationDisplay from './updateLocationDisplay.js';
import updateTransportationMethodDisplay from './updateTransportMethodDisplay.js';
import updateCurrencyDisplay from './updateCurrencyDisplay.js';
import updateHealthDisplay from './updateHealthDisplay.js';
import { displayDrugBuySellList } from './displayDrugList.js';
import { getPlayer1, setPlayer1 } from './globalVariable.js';

const init = () => { 
    setPlayer1();
    let player = getPlayer1();
    console.log(player);

    // let welcomMessage1 = `What is up my new friend!? ${player1.playerData.name} is the ` +
    //                      "name right? Of course I have heard good things, or we wouldn't " +
    //                      "be conversating here at the moment, would we?";
    // let welcomeMEssage2 = "Well getting down to business... I don't touch the stuff my " + 
    //                       "self, but I know a guy and I have this stack of cash here to " +
    //                       "get you started. Hit up the local dealer and pick up the supplies " +
    //                       "needed to start your empire my friend! Sky's the limit and the " +
    //                     "only color we see is GREEEN!!";

    // alert(welcomMessage1);
    // alert(welcomeMEssage2);

    updateLocationDisplay(player.playerData.currentLocal);
    updateTransportationMethodDisplay(player.playerData.currentTransportMethod);
    updateCurrencyDisplay('cashDisplay', player.playerData.cashOnHand);
    console.log(player.playerData.bankAccount);
    updateCurrencyDisplay('bankDisplay', player.playerData.bankAccount);
    updateCurrencyDisplay('debtDisplay', player.playerData.debt);
    updateHealthDisplay(player.playerData.health);

    displayDrugBuySellList();
}

export default init;