import updateHealthDisplay from "./updateHealthDisplay";

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

export {
    payLoan,
}