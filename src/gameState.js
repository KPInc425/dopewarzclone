let currentGameState = "Intro";

let gameStates = [
    {
        name: "Intro",
        travelsLeft: 0,
        policeChance: 0,
    },
    {
        name: "Morning",
        travelsLeft: 1,
        policeChance: 20,

    },
    {
        name: "Afternoon",
        travelsLeft: 1,
        PoliceChance: 30,
    },
    {
        name: "Evening",
        travelsLeft: 1,
        policeChance: 50,
    },
    {
        name: "Night",
        travelsLeft: 1,
        policeChance: 60,
    },
]

const setCurrentGameState = (newGameState) => {
    currentGameState = newGameState;
}

const getGameStateData = () => {
    gameStates.forEach((gameState) => {
        if (gameState.name == currentGameState){
            return gameState;
        }
    })
}



export default {
    currentGameState,
    gameStates,
    setCurrentGameState,
}