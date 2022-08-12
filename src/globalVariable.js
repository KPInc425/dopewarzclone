import createPlayer from './player.js';

let player1;
// playerName, currentDay, maxDays, cashOnHand, bankAccount, debt
const setPlayer1 = (...args) => {
    if (args.length < 1) {
        player1 = createPlayer("KPInc425",20,200,50000,20000,50000, ...args);
    };

}

const getPlayer1 = () => {
    return player1;
}

export {
    setPlayer1,
    getPlayer1,
}