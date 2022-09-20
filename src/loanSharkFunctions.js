import updateHealthDisplay from "./updateHealthDisplay";
// let player = window.player1;

const loanSharkMessages = [
    {
        type: "debt",    // Owes
        msgArray: [
            "Well well, here we are again... You got what you owe me? Or" +
            " you just want me to make you bleed some more?",
            "You don't got much time left... I hope you came with some good news...",
            "I am feeling generous today, I will only add another 15%... Ha ha " +
            "I am just yankin your chain... for now...",
            "I just want you to know... that my sisters, nephews, cousin, really " +
            "appreciates your contribution to their private schooling...",
        ]
    },
    {
        type: "clear",    // Doesn't owe
        msgArray: [
            "Well well, here we are again... What will it be this time?",

        ]
    },
]

const payLoan = (debt) => {
    let player = window.player1
    if (debt < player.playerData.cashOnHand) {
        player.playerData.cashOnHand -= debt;
        console.log(player.playerData.cashOnHand);
    } else {
        alert("Are you just here to waste my @#$%^&* Time!");
        alert("Loanshark's goons rough you up a bit to teach a lesson!");
        player.changeHealth(-8);
        updateHealthDisplay(player.playerData.health);
    }
}

const getRandomLoanSharkMsg = () => {
    let player = window.player1;
    console.log(loanSharkMessages[0].msgArray.length);
    if (player.playerData.debt > 0) {
        console.log(loanSharkMessages[0].msgArray[Math.random() * (loanSharkMessages[0].msgArray.length - 1)])
        return loanSharkMessages[0].msgArray[Math.random() * (loanSharkMessages[0].msgArray.length - 1)];
    } else {
        console.log(loanSharkMessages[1].msgArray[Math.random() * (loanSharkMessages[1].msgArray.length - 1)])
        return loanSharkMessages[1].msgArray[Math.random() * (loanSharkMessages[1].msgArray.length - 1)];
    }
}

export {
    payLoan,
    getRandomLoanSharkMsg,
}