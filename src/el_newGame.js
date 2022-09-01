import displayNarrative from "./displayNarrative";
import init from "./init";

const el_btnNewGame = () => {
    const btnNewGame = document.getElementById('btnNewGame');

    btnNewGame.addEventListener('click', () => {
        // console.log('click');

        let welcomMessage1 = "What is up my new friend!? I have heard good things, or we wouldn't " +
                "be conversating here at the moment, would we?";
        let welcomeMessage2 = "Well, if we're getting down to business... I don't touch the stuff my " + 
                "self, but I know a guy and I have this stack of cash here to " +
                "get you started. Hit up the local dealer and pick up the supplies " +
                "needed to start your empire my friend! Sky's the limit and the " +
                "only color we see is GREEEN!!";

        let narrative = [welcomMessage1, welcomeMessage2];


        displayNarrative(narrative, init);

        // init();
    },{once: true});
}


export default el_btnNewGame;