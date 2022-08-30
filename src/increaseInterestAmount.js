import updateCurrencyDisplay from "./updateCurrencyDisplay";

const increaseInterestAmount = () => {
    let player = window.player1;
    console.log(typeof player.playerData.debt.value)
    let increase = player.playerData.debt.value * player.playerData.debt.taxRate;
    console.log(increase);
    player.playerData.debt.value += increase;

    updateCurrencyDisplay('debtDisplay', player.playerData.debt.value);
    return console.log(player.playerData.debt.value);
}

export default increaseInterestAmount;