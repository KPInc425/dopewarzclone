import { getRandomLoanSharkMsg } from "./loanSharkFunctions";

const displayLoanSharkUI = () => {
    const gameContainer = document.getElementById('gameContainer');


    const uiContainer = document.createElement('div');
    uiContainer.classList.add('narrativeContainer');

    const textContainer = document.createElement('div');
    textContainer.textContent = getRandomLoanSharkMsg();

    uiContainer.appendChild(textContainer);

    // add inputs
    // add buttons

    // add cancel button

    gameContainer.appendChild(uiContainer);


}

export {
    displayLoanSharkUI,
}